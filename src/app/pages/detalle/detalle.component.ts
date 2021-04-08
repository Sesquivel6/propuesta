import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
  styleUrls: ['detalle.component.css'],
})
export class DetalleComponent {


  navLinks = [
    {path: 'registro', label: 'Detalle'},
    {path: 'fechas', label: 'Ingreso Documentos'},
    {path: 'licitatorio', label: 'Proceso Licitatorio'},
    {path: 'informe', label: 'Informe Selección'},
    {path: 'adjudicacion', label: 'Adjudicación Contrato'},
    {path: 'garantias', label: 'Garantías del contrato'},
    {path: 'imputaciones', label: 'Imputaciones'},
    {path: 'modificaciones', label: 'Modificaciones'},
    {path: 'liquidacion', label: 'Liquidación'},    
  ];

}

