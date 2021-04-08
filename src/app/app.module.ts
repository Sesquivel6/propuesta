import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// SERVICES
import { HttpClientModule } from '@angular/common/http';

//PAGES


import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FilterpipePipe } from './pipes/filterpipe.pipe';

import { DetalleRegistroComponent } from './pages/detalle-registro/detalle-registro.component';
import { SeguimientofechasComponent } from './pages/seguimientofechas/seguimientofechas.component';
import { ProcesolicitatorioComponent } from './pages/procesolicitatorio/procesolicitatorio.component';
import { InformeseleccionComponent } from './pages/informeseleccion/informeseleccion.component';
import { ImputacionesComponent } from './pages/imputaciones/imputaciones.component';
import { ContraloriaComponent } from './pages/contraloria/contraloria.component';
import { ModificacionesComponent } from './pages/modificaciones/modificaciones.component';
import { LiquidacionComponent } from './pages/liquidacion/liquidacion.component';

//Gráficas
import { PrimerinformeComponent } from './components/primerinforme/primerinforme.component';
import { SegundoinformeComponent } from './components/segundoinforme/segundoinforme.component';
import { TercerinformeComponent } from './components/tercerinforme/tercerinforme.component';

// MatModule
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdjudicacionComponent } from './pages/adjudicacion/adjudicacion.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GarantiasComponent } from './pages/garantias/garantias.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ListcalendarComponent } from './components/listcalendar/listcalendar.component';

//NG CHARTS
import { ChartsModule } from 'ng2-charts';
import { TablaejecucionComponent } from './components/tablaejecucion/tablaejecucion.component';
import { infoModificacionComponent } from './pages/infoModificacion/infoModificacion.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    NavbarComponent,
    SearchComponent,
    LoadingComponent,
    DetalleComponent,
    FilterpipePipe,
    infoModificacionComponent,
    DetalleRegistroComponent,
    SeguimientofechasComponent,
    ProcesolicitatorioComponent,
    InformeseleccionComponent,
    ImputacionesComponent,
    ContraloriaComponent,
    ModificacionesComponent,
    LiquidacionComponent,    
    AdjudicacionComponent,
    HeaderComponent,
    FooterComponent,
    GarantiasComponent,
    CalendarComponent,
    ListcalendarComponent,
    PrimerinformeComponent,
    SegundoinformeComponent,
    TercerinformeComponent,
    TablaejecucionComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    //SERVICE HTTP MODULE
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
