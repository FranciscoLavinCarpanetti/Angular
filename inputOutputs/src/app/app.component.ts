import { Component } from '@angular/core';
import { CronometroComponent } from "./components/cronometro/cronometro.component";
import { FotoComponent } from "./components/foto/foto.component";
import { BotonColorComponent } from "./components/boton-color/boton-color.component";
import { SelectorPaisComponent } from "./components/selector-pais/selector-pais.component";

@Component({
  selector: 'app-root',
  imports: [CronometroComponent, FotoComponent, BotonColorComponent, SelectorPaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pais: string = "pais";
  capital: string = "capital";
  title = 'inputOutputs';
  numero = 234;
  arrayFotos: any = [
    { title: 'el gato gargamel', url: 'https://i.pinimg.com/736x/4c/c2/2e/4cc22ed1b753685ac4be9f50c5851ae2.jpg' },
    { title: 'el perrito pug', url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp' },
    { title: 'El caballo blanco de santiago', url: 'https://www.eldiarioweb.com/wp-content/uploads/2023/09/contratapa-4-711x400.jpg' },
  ]
  arrayPaises: any = [
    { pais: 'españa', capital: 'madrid' },
    { pais: 'francia', capital: 'paris' },
    { pais: 'alemania', capital: 'berlin' }
  ]
  color: string = "";

  cambiarColor(event: string) {
    this.color = event
  }

  pintarPais(event: string) {
    // recoger la capital del pais que me ha llegado del hijo.
    if (event !== "") {
      let paisBuscado = this.arrayPaises.find((country: any) => country.pais === event)
      this.pais = paisBuscado.pais;
      this.capital = paisBuscado.capital;
    } else {
      alert('es obligatorio seleccionar un pais')
    }
  }
}
