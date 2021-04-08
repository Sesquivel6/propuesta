import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { FilterpipePipe } from 'src/app/pipes/filterpipe.pipe';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchText: string;
  cargando = false;
  @Input() heroes: HeroeModel[] = [];

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.cargando = true;
    this.heroesService.getHeroes()
        .subscribe ( resp => {
        console.log(resp);
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
