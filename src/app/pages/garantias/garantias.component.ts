import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html',
  styleUrls: ['./garantias.component.css']
})
export class GarantiasComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder ) {

    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get poliza(){
    return this.forma.get('poliza') as FormArray;
  }

  crearFormulario() {
    //Esto hará referencia a nuestro FormGroup, el cual será igual al formBuilder el cual requerirá la configuración de un objeto (JScript)
    this.forma = this.fb.group({ 
      resolucion  : [''],
      pasatiempos: this.fb.array([]),
      poliza: this.fb.array([])
    })
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.fb.control('', Validators.required))
  }
  agregarPoliza(){
    this.poliza.push( this.fb.control('', Validators.required))
  }
  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }
  borrarPoliza(i:number){
    this.poliza.removeAt(i);
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

