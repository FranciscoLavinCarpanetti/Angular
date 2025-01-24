import { Component } from '@angular/core';
import { ListaContactosComponent } from "./components/lista-contactos/lista-contactos.component";
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [ListaContactosComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicios';
}
