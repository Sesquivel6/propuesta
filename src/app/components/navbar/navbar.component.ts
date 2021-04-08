import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() heroes: HeroeModel[] = [];
  cargando = false;
  searchText: string;
  loading: boolean;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.cargando = true;
    this.heroesService.getHeroes()
        .subscribe ( resp => {
        
        this.heroes = resp;
        this.cargando = false;
        
        })
        
  }

  borrarHeroe(heroe: HeroeModel, i:number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value) {
        this.heroes.splice(i, 1)
        this.heroesService.borrarHeroe(heroe.id).subscribe();

      }
    });
    
  }

}
