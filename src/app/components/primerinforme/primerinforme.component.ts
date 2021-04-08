import { Component, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
// https://therichpost.com/angular-11-chartjs-working-demo/
// https://valor-software.com/ng2-charts/#/LineChart

@Component({
  selector: 'app-primerinforme',
  templateUrl: './primerinforme.component.html',
  styleUrls: ['./primerinforme.component.css']
})
export class PrimerinformeComponent {

  public lineChartData: ChartDataSets[] = [
    { data: [200, 400, 600, 800, 800, 800, 1000, 1200, 1200, 1200, 1200, 1400], label: 'Caja Anual' },
  
  ];

  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

  public lineChartOptions: (ChartOptions ) = { responsive: true };

  public lineChartColors: Color[] = [
    { // aqua
      backgroundColor: 'rgba(224,240,252,1)',
      borderColor: 'rgba(0,128,206,1)',
      pointBackgroundColor: 'rgba(46,168,173,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(46,168,173,1)'
    },

  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() { }

  ngOnInit(): void {
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
