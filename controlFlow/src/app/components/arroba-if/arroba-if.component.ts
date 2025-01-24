import { Component } from '@angular/core';

@Component({
  selector: 'app-arroba-if',
  imports: [],
  templateUrl: './arroba-if.component.html',
  styleUrl: './arroba-if.component.css'
})
export class ArrobaIfComponent {
  visible: boolean = false;
  texto: string = 'mostrar';
  edad: number = -1;

  mostrar() {
    this.texto = this.visible ? "mostrar" : "ocultar";
    this.visible = !this.visible;
  }

  updateAge(event: any) {
    //console.log(typeof event.target.value)
    this.edad = Number(event.target.value);
  }
}
