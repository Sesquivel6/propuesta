import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoModel } from 'src/app/models/contrato.model';

@Component({
  selector: 'app-adjudicacion',
  templateUrl: './adjudicacion.component.html',
  
})
export class AdjudicacionComponent implements OnInit {

  forma: FormGroup;
  contrato = new ContratoModel();

  constructor( private fb: FormBuilder ) {

    this.crearFormulario();
  }
  ngOnInit(): void {
  }
  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }
  get resoluciones(){
    return this.forma.get('resoluciones') as FormArray;
  }

  crearFormulario() {
    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      resolucion  : [''],
      pasatiempos: this.fb.array([]),
      resoluciones: this.fb.array([])
    })
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required))
  }
  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }

  agregarResolucion(){
    this.resoluciones.push( this.fb.control('', Validators.required))
  }
  borrarResolucion(i:number){
    this.resoluciones.removeAt(i);
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

