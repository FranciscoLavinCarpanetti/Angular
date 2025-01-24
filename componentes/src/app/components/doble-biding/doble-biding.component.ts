import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doble-biding',
  imports: [FormsModule],
  templateUrl: './doble-biding.component.html',
  styleUrl: './doble-biding.component.css'
})
export class DobleBidingComponent {

  /* para hacer comunicacion bi-direccional entre html y ts debemos importar en el componente una libreria de angular/forms FormsModule */
  numero: number = 34;
  frase: string = 'En un lugar de la mancha';
  seleccion: string = "ceo";
  color: string = '#00FF00'
  fecha: string = '2025-01-21'

  mostrarDatos() {
    console.log(this.numero);
    console.log(this.frase);
    console.log(this.seleccion)
    console.log(this.fecha)
  }

  mostrarFrase(event: any) {
    console.log(event.target.value)

  }
}
