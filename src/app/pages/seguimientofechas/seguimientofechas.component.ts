import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContratoModel } from 'src/app/models/contrato.model';

@Component({
  selector: 'app-seguimientofechas',
  templateUrl: './seguimientofechas.component.html',
  
})
export class SeguimientofechasComponent implements OnInit {

  contrato = new ContratoModel();
  now:number;

  constructor() { 
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {
      if (form.invalid) {
        console.log('formulario no valido');
        return;
      }
  }
}
