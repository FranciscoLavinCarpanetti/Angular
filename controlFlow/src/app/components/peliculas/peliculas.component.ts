import { Component } from '@angular/core';
import { PELICULAS } from './peliculas.db';
import { IPelicula } from '../../interfaces/ipelicula.interface';
import { PeliculaComponent } from "./pelicula/pelicula.component";

@Component({
  selector: 'app-peliculas',
  imports: [PeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  todosPeliculas: IPelicula[] = PELICULAS;
  arrPeliculas: IPelicula[] = PELICULAS;

  obtenerCategory(event: any) {
    let categoria = event.target.value;
    this.arrPeliculas = this.todosPeliculas.filter(pelicula => pelicula.category.toLowerCase().includes(categoria.toLowerCase()))

  }

}
