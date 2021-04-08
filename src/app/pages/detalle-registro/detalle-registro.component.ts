import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styleUrls: ['./detalle-registro.component.css']
})
export class DetalleRegistroComponent implements OnInit {

  heroe = new HeroeModel ();
  contrato: string;
  

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {
    if (form.invalid) {
      console.log('formulario no valido');
      return;
    }

    Swal.fire({      
      icon: 'info',
      title: 'Espere',
      text: 'Guardando información',      
      allowOutsideClick: false
    });
    Swal.showLoading();
    
      let peticion: Observable<any>;

    if ( this.heroe.id ) {

      peticion = this.heroesService.actualizarHeroe( this.heroe );
        
    } else { 

      peticion = this.heroesService.crearHeroe( this.heroe );
        
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Ha sido actualizado correctamente',
        icon: 'success'
      })
    })
        
  }


}
