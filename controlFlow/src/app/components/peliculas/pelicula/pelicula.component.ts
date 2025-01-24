import { Component, Input } from '@angular/core';
import { IPelicula } from '../../../interfaces/ipelicula.interface';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  @Input() miPelicula!: IPelicula;
}
