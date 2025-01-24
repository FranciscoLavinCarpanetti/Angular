import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
  @Input() valorInicial: number = 12;
  numero: number = 0;
  textoBtn: string = 'start';
  isActive: boolean = false;
  intervalo: any;

  //angular define un conjunto de funciones dentro de un componente, funciones de ciclo de vida, y son funciones que ocurren siempre.

  /* 1 funcion de ciclo de vida, solo responde a la carga de clase. */
  constructor() {

  }

  /* 2 funcion del ciclo de vida. ngOnInit(). Hooks. Asegurarse que el html, css, el selector y clase estan cargados. Solo se ejecuta una vez. */
  ngOnInit() {
    this.numero = this.valorInicial;
  }

  iniciarCronometro(): boolean {
    this.isActive = !this.isActive;
    this.textoBtn = this.isActive ? 'stop' : 'start';

    if (!this.isActive) {
      clearInterval(this.intervalo);
      return false;
    }

    this.intervalo = setInterval(() => {
      this.numero++;
    }, 1000)
    return true;
  }
}
