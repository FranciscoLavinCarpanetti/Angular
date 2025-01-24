import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabs',
  imports: [],
  templateUrl: './menu-tabs.component.html',
  styleUrl: './menu-tabs.component.css'
})
export class MenuTabsComponent {
  currentCity: string = "london";

  cambiarCiudad(ciudad: string) {
    this.currentCity = ciudad;
  }
}
