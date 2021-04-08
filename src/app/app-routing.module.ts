import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

// PAGINAS DEL DETALLE
import { DetalleRegistroComponent } from './pages/detalle-registro/detalle-registro.component';
import { SeguimientofechasComponent } from './pages/seguimientofechas/seguimientofechas.component';
import { ProcesolicitatorioComponent } from './pages/procesolicitatorio/procesolicitatorio.component';
import { InformeseleccionComponent } from './pages/informeseleccion/informeseleccion.component';
import { AdjudicacionComponent } from './pages/adjudicacion/adjudicacion.component';
import { ImputacionesComponent } from './pages/imputaciones/imputaciones.component';
import { ModificacionesComponent } from './pages/modificaciones/modificaciones.component';
import { LiquidacionComponent } from './pages/liquidacion/liquidacion.component';

import { GarantiasComponent } from './pages/garantias/garantias.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ListcalendarComponent } from './components/listcalendar/listcalendar.component';
import { PrimerinformeComponent } from './components/primerinforme/primerinforme.component';
import { SegundoinformeComponent } from './components/segundoinforme/segundoinforme.component';
import { TercerinformeComponent } from './components/tercerinforme/tercerinforme.component';
import { TablaejecucionComponent } from './components/tablaejecucion/tablaejecucion.component';
import { infoModificacionComponent } from './pages/infoModificacion/infoModificacion.component';



const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  //CALENDARIO
  {path: 'calendar', component: CalendarComponent},
  {path: 'listcalendar', component: ListcalendarComponent},
  //INFORMES
  {path: 'primerinforme', component: PrimerinformeComponent},
  {path: 'segundoinforme', component: SegundoinformeComponent},
  {path: 'tercerinforme', component: TercerinformeComponent},
  //
  {path: 'tablaejecucion', component: TablaejecucionComponent},
  
  {path: 'search/:termino', component: SearchComponent},
  {path: 'heroe/:id', component: HeroeComponent},  
  {path: 'detalle/:id', 
          component: DetalleComponent,
          children: [
            {path: 'registro', component: DetalleRegistroComponent},
            {path: 'fechas', component: SeguimientofechasComponent},
            {path: 'licitatorio', component: ProcesolicitatorioComponent},
            {path: 'informe', component: InformeseleccionComponent},
            {path: 'adjudicacion', component: AdjudicacionComponent},
            {path: 'garantias', component: GarantiasComponent},
            {path: 'imputaciones', component: ImputacionesComponent},
            {path: 'modificaciones', component: ModificacionesComponent,
            children: [
                {path: 'info', component: infoModificacionComponent}
                      ]},
            {path: 'liquidacion', component: LiquidacionComponent},
          ]
        },
  {path: '**', pathMatch:'full', redirectTo:'heroes'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
