import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };

  locales = [esLocale];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
    locale: esLocale,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Apertura LP20/2021', date: '2021-03-25' },
      { title: 'Fecha Programada Informe Técnico LP57/2020', date: '2021-03-19' },
      { title: 'event 2', date: '2021-03-29', },
      { }
    ]
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }


  constructor() { }

  ngOnInit(): void {
  }

}
