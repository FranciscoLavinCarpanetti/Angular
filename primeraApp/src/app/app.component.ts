import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre: string = 'Lucia';
  apellido: string = 'Pérez'
  url: string = "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp"
  title: string = `me llamo ${this.nombre}`;
  job: string = "";
  color: string = 'tomato'
  numero: number = 0;

  usuario: any = {
    nombre: 'Pepe',
    apellidos: 'Villuela',
    edad: 67,
    email: 'pepe@gmail.com'
  }


  escribirTexto(): string {
    let texto = `En un lugar de la mancha donde vive ${this.usuario.nombre} y que tiene la edad de ${this.usuario.edad}`

    return texto;
  }

  onclick(texto: string) {
    alert('tocado ' + texto)
  }

  capturarJob(event: any) {
    this.job = event.target.value;
  }

  cambiarColor(event: any): void {
    this.color = event.target.value;
  }

  cambiarNumero(event: any): void {
    this.numero = event.target.value;
  }
}
