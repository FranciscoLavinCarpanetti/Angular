import { Component } from '@angular/core';

@Component({
  selector: 'app-arroba-switch',
  imports: [],
  templateUrl: './arroba-switch.component.html',
  styleUrl: './arroba-switch.component.css'
})
export class ArrobaSwitchComponent {
  roleActual: string = "suscriptor";

  getRole(role: string): void {
    this.roleActual = role;
  }
}
