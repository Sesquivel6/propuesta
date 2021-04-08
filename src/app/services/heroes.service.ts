import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map, delay, filter, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Heroe } from "../heroe";
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

// map transforma lo que un observable puede regresar
// en este caso, la solicitud http
// https://angular.io/guide/rx-library


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroe = new HeroeModel ();

  private url = 'https://crud-angular-94ed7-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient) { }

  crearHeroe ( heroe: HeroeModel ) {

    return this.http.post(`${this.url}/heroes.json`, heroe )
            .pipe( //poner operador
              map( (resp:any) => { //recibe respuesta de la petición (lo que reciba http.post)
                heroe.id = resp.name //respuesta es el name.id, pero antes debemos decirle que es tipo any
                return heroe; //va a devolver toda la instancia del heroe con su nuevo id
              })
            )

  }

  actualizarHeroe ( heroe: HeroeModel) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp)
  }

  borrarHeroe( id: string) {

    return this.http.delete(`${this.url}/heroes/${id}.json`);

  }

  getHeroe(id: string) {

    return this.http.get(`${this.url}/heroes/${id}.json`);
    

  }





  getHeroes ( ) {
    return this.http.get(`${this.url}/heroes.json`)
                .pipe(
                  // map(resp => this.crearArreglo(resp)) // Ambos son iguales
                  
                  map( this.crearArreglo),
                  delay(50)
                );
  }

  
  

  private crearArreglo( heroesObj: object) {

    const heroes: HeroeModel[] = [];
    

    if ( heroesObj === null ) { return []; }

    Object.keys(heroesObj).forEach( key => {
      const heroe: HeroeModel =heroesObj[key];
      heroe.id = key;
      heroes.push( heroe );
    })

    return heroes;
  }



}

