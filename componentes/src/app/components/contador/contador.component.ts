import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador: number = 0;
  color: string = 'gray';
  plus: boolean = false;
  minus: boolean = false;

  cambiarColor(numero: number) {
    if (numero > 0) {
      this.color = 'green'
    } else if (numero < 0) {
      this.color = 'tomato'
    } else if (numero === 0) {
      this.color = 'grey'
    }
  }

  aumentar() {
    this.minus = false;
    if (this.contador < 20) {
      this.contador++;
      this.plus = false;
      this.cambiarColor(this.contador)
    }

    if (this.contador === 20) {
      this.plus = true;
    }

  }

  disminuir() {
    this.plus = false;
    if (this.contador > -20) {
      this.contador--;
      this.minus = false;
      this.cambiarColor(this.contador)
    }

    if (this.contador === -20) {
      this.minus = true;
    }

  }

  // quiero que el valor maximo sea 20 y el minimo -20 si el numero es negativo el fondo del contador en rojo y si es positivo es verde se queda en gris si es 0

}
