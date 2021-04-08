import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  get liquidacion(){
    return this.forma.get('liquidacion') as FormArray;
  }

  get iModificacion(){
    return this.forma.get('iModificacion') as FormArray;
  }

  crearFormulario() {
    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      resolucion  : [''],
      liquidacion: this.fb.array([]),
      iModificacion: this.fb.array([])
    })
  }

  agregarLiquidacion(){
    this.liquidacion.push( this.fb.control('', Validators.required))
  }
  agregarModificacion(){
    this.iModificacion.push( this.fb.control('', Validators.required))
  }
  borrarLiquidacion(i:number){
    this.liquidacion.removeAt(i);
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
