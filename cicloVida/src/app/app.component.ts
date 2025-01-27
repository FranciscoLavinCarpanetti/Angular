import { Component } from '@angular/core';
import { EjerciciosComponent } from "./components/ejercicios/ejercicios.component";

@Component({
  selector: 'app-root',
  imports: [EjerciciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cargarData(event: any) {
    console.log(event.target.value)
  }
}
