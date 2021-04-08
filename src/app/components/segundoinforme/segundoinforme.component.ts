import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Color, Label } from 'ng2-charts';
// https://www.npmjs.com/package/chartjs-plugin-datalabels
// https://valor-software.com/ng2-charts/#/BarChart

@Component({
  selector: 'app-segundoinforme',
  templateUrl: './segundoinforme.component.html',
  styleUrls: ['./segundoinforme.component.css']
})
export class SegundoinformeComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [22, 23, 25, 19, 36, 45, 50, 60, 61, 56, 55, 40], label: 'Programado' },
    { data: [23, 24, 23, 19, 38, 43, ], label: 'Ejecutado' }
  ];

  public barChartColor: Color[] = [
    { // aqua
      backgroundColor: 'rgba(245,231,114,1)',
      borderColor: 'rgba(46,168,173,1)',
      pointBackgroundColor: 'rgba(46,168,173,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(46,168,173,1)'
    },
    { // aqua
      backgroundColor: 'rgba(247,187,104,1)',
      borderColor: 'rgba(46,168,173,1)',
      pointBackgroundColor: 'rgba(46,168,173,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(46,168,173,1)'
    }
  ];
  
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