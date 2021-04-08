import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-procesolicitatorio',
  templateUrl: './procesolicitatorio.component.html',
  
})
export class ProcesolicitatorioComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder ) {

    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  crearFormulario() {
    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      resolucion  : [''],
      pasatiempos: this.fb.array([])
    })
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required))
  }
  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
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








