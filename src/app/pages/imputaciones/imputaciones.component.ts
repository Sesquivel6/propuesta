import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imputaciones',
  templateUrl: './imputaciones.component.html',
  styleUrls: ['./imputaciones.component.css']
})
export class ImputacionesComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  get iAdjudicacion(){
    return this.forma.get('iAdjudicacion') as FormArray;
  }

  get iModificacion(){
    return this.forma.get('iModificacion') as FormArray;
  }

  crearFormulario() {
    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      resolucion  : [''],
      iAdjudicacion: this.fb.array([]),
      iModificacion: this.fb.array([])
    })
  }

  agregarAdjudicacion(){
    this.iAdjudicacion.push( this.fb.control('', Validators.required))
  }
  agregarModificacion(){
    this.iModificacion.push( this.fb.control('', Validators.required))
  }
  borrarAdjudicacion(i:number){
    this.iAdjudicacion.removeAt(i);
  }
  borrarModificacion(i:number){
    this.iModificacion.removeAt(i);
  }

  guardar(  ) {

    console.log( this.forma )

    if ( this.forma.invalid) {
      return Object.values( this.forma.controls).forEach( control => {
// Equivalentes
        if ( control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched())
        } else {
          control.markAsTouched();
        }
        
      });
    }
    //Posteo de la información
    this.forma.reset();
  }

}
