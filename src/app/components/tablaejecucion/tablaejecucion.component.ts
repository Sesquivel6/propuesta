import { Component, OnInit } from '@angular/core';

export interface Budget {
  mes: string;  
  programa_mensual: number;
  real_mensual: number;
  monto_acumulado: number;
}



@Component({
  selector: 'app-tablaejecucion',
  templateUrl: './tablaejecucion.component.html',
  styleUrls: ['./tablaejecucion.component.css']
})
export class TablaejecucionComponent implements OnInit {

  total_programado:number;
  total_real:number;
  total_acumulado:number;
  

  public ejecucion_presupuestaria:Budget[] = [
    { 'mes': 'enero',      'programa_mensual': 800000, 'real_mensual': 810000, 'monto_acumulado' : 800000 },
    { 'mes': 'febrero',    'programa_mensual': 800000, 'real_mensual': 805000, 'monto_acumulado' : 1600000 },
    { 'mes': 'marzo',      'programa_mensual': 800000, 'real_mensual': 790000, 'monto_acumulado' : 2400000 },
    { 'mes': 'abril',      'programa_mensual': 700000, 'real_mensual': 0, 'monto_acumulado' : 3100000 },
    { 'mes': 'mayo',       'programa_mensual': 800000, 'real_mensual': 0, 'monto_acumulado' : 3900000 },
    { 'mes': 'junio',      'programa_mensual': 800000, 'real_mensual': 0, 'monto_acumulado' : 4700000 },
    { 'mes': 'julio',      'programa_mensual': 900000, 'real_mensual': 0, 'monto_acumulado' : 5600000 },
    { 'mes': 'agosto',     'programa_mensual': 800000, 'real_mensual': 0, 'monto_acumulado' : 6400000 },
    { 'mes': 'septiembre', 'programa_mensual': 950000, 'real_mensual': 0, 'monto_acumulado' : 7350000 },
    { 'mes': 'octubre',    'programa_mensual': 960000, 'real_mensual': 0, 'monto_acumulado' : 8310000 },
    { 'mes': 'noviembre',  'programa_mensual': 880000, 'real_mensual': 0, 'monto_acumulado' : 9190000 },
    { 'mes': 'diciembre',  'programa_mensual': 810000, 'real_mensual': 0, 'monto_acumulado' : 10000000 }      
    ];
  
    // https://www.primefaces.org/primeng/showcase/#/table/colgroup
  
  constructor() { }

  ngOnInit(): void {

  this.getBudgets
  

  this.calculateProgramado();
  this.calculateReal();  
  this.calcularAcumulado();


  
}

  getBudgets(){
    return this.ejecucion_presupuestaria;
  }

  calculateProgramado() {
    let total = 0;
    for(let ejecucion of this.ejecucion_presupuestaria) {
        total += ejecucion.programa_mensual;
    }

    this.total_programado = total;
  }

  calculateReal() {
    let total = 0;
    for(let ejecucion of this.ejecucion_presupuestaria) {
        total += ejecucion.real_mensual;
    }

    this.total_real = total;
  }


  calcularAcumulado(){

    let total = 0;
    for(let ejecucion of this.ejecucion_presupuestaria) {
        total += ejecucion.monto_acumulado;
    }

    this.total_acumulado = total;
  }


}
