import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector-pais',
  imports: [],
  templateUrl: './selector-pais.component.html',
  styleUrl: './selector-pais.component.css'
})
export class SelectorPaisComponent {
  @Output() paisEnviado: EventEmitter<string> = new EventEmitter();

  cargarPais(event: any) {
    let pais: string = event.target.value;
    //emitir el pais que recogido al padre
    this.paisEnviado.emit(pais)
  }
}
