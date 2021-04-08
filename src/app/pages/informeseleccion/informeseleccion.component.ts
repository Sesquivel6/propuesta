import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoModel } from 'src/app/models/contrato.model';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-informeseleccion',
  templateUrl: './informeseleccion.component.html',
  
})
export class InformeseleccionComponent implements OnInit {

  forma: FormGroup;
  heroe = new HeroeModel ();
  contrato = new ContratoModel();

  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get comision(){
    return this.forma.get('comision') as FormArray;
  }



  crearFormulario() {
    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      resolucion  : [''],
      pasatiempos: this.fb.array([]),
      comision: this.fb.array([])
      
    })
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required))
  }
  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }



  agregarComision(){
    this.comision.push( this.fb.control('', Validators.required))
  }
  borrarComision(i:number){
    this.comision.removeAt(i);
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
