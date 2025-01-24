import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-color',
  imports: [],
  templateUrl: './boton-color.component.html',
  styleUrl: './boton-color.component.css'
})
export class BotonColorComponent {
  // un Output tiene 4 pasos
  // 1 parte del output inicializar la variable decorada con @Output
  @Output() colorEnviado: EventEmitter<string> = new EventEmitter();
  numero: string = ""

  cargarColor(color: string): void {
    //cuando tengo el valor que quiero enviar al componente padre
    //2 emitir un evento hacia el padre.
    this.colorEnviado.emit(color)
  }

}
