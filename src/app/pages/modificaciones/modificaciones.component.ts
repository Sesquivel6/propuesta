import { Component, OnInit } from '@angular/core';
import { ContratoModel } from 'src/app/models/contrato.model';
import { HeroeModel } from 'src/app/models/heroe.model';


@Component({
  selector: 'app-modificaciones',
  templateUrl: './modificaciones.component.html',
  styleUrls: ['./modificaciones.component.css']
})
export class ModificacionesComponent implements OnInit {

  heroe = new HeroeModel();
  contrato = new ContratoModel();
  total:number;
  balance:number;
  total_aum:number;
  total_dism:number;
  total_ooee:number;
  total_aplazamiento:number;
  
  constructor() { }

  ngOnInit(): void {

  this.calculateAum();
  this.calculateDism();
  this.calculateOOEE();
  this.calculateAplazamiento();

}

modificaciones: any[] = [
  {
    'nro': '1',
    'nro_informe': '182-05',
    'fecha_informe': '09-03-2021',
    'n_resol': '2489',
    'fecha_res': '07-04-2021',
    'cambio_plazo': 0,
    'monto_aum': 4670270,
    'monto_dism': 0,
    'monto_ooee': 0,
    'confirmacion': 'Confirmada por usuario1',
    'recibido': true
  },
  {
    'nro': '2',
    'nro_informe': '182-27',
    'fecha_informe': '09-03-2021',
    'n_resol': '2500',
    'fecha_res': '20-04-2021',
    'cambio_plazo': 90,
    'monto_aum': 3767606,
    'monto_dism': 10000000,
    'monto_ooee': 22175300,
    'confirmacion': 'Confirmada por usuario1',
    'recibido': false
  },
  {
    'nro': '3',
    'nro_informe': '182-32',
    'fecha_informe': '23-03-2021',
    'n_resol': '',
    'fecha_res': '',
    'cambio_plazo': 30,
    'monto_aum': 25000000,
    'monto_dism': 0,
    'monto_ooee': 10000000,
    'confirmacion': 'Confirmada por usuario1',
    'recibido': true
  }
  ];

  // https://www.primefaces.org/primeng/showcase/#/table/colgroup

  calculateAum() {
    let total = 0;
    for(let modificacion of this.modificaciones) {
        total += modificacion.monto_aum;
    }

    this.total_aum = total;
  }

  calculateDism() {
    let total = 0;
    for(let modificacion of this.modificaciones) {
        total += modificacion.monto_dism;
    }

    this.total_dism = total;
  }

  calculateOOEE() {
    let total = 0;
    for(let modificacion of this.modificaciones) {
        total += modificacion.monto_ooee;
    }

    this.total_ooee = total;
  }

  calculateAplazamiento() {
    let total = 0;
    for(let modificacion of this.modificaciones) {
        total += modificacion.cambio_plazo;
    }

    this.total_aplazamiento = total;
  }
}
