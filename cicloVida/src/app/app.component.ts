import { Component } from '@angular/core';
import { EjercicioComponent } from "./components/ejercicio/ejercicio.component";


@Component({
  selector: 'app-root',
  imports: [EjercicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cicloVida';
}
