//Es mas sencillo de trabajar porque tendremos mayor control sobre el formulario a trabajar
// ReactiveForms utilizando un modelo o interface:
// https://www.thetopsites.net/article/52442815.shtml
// https://malcoded.com/posts/angular-fundamentals-reactive-forms/?source=post_page---------------------------

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoModel } from 'src/app/models/contrato.model';


@Component({
  selector: 'app-infoModificacion',
  templateUrl: './infoModificacion.component.html'
  
})
export class infoModificacionComponent implements OnInit {

  //Se crea una propiedad de la clase
  forma: FormGroup;
  

// FormBuilder es un servicio que tiene varios métodos que permiten crear formularios rapidamente
  constructor( private fb: FormBuilder) { 

    this.crearFormulario();

  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  campoNoValido(campo:string) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched
  }

  ciudadNoValido() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
  }

  regionNoValido() {
    return this.forma.get('direccion.region').invalid && this.forma.get('direccion.region').touched
  }

//cuando hay mas de dos lineas de codigo, es mejor crear un metodo independiente que permita tener el codigo aislado. Luego lo llamaremos desde el constructor
  crearFormulario() {

    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      nombre  : ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email   : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: this.fb.group({
        region: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
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
