import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-name-search',
  imports: [ReactiveFormsModule],
  templateUrl: './name-search.component.html',
  styleUrl: './name-search.component.css'
})
export class NameSearchComponent {
  @Output() busquedaEmitida: EventEmitter<string> = new EventEmitter()
  nameForm: FormGroup;

  constructor() {
    this.nameForm = new FormGroup({
      name: new FormControl("", [])
    }, [])
  }

  // este es el evento del formulario
  getName() {
    //en este evento tenemos los datos que necesitamos que es nombre a buscar, enviar al padre el name que tiene que buscar para eso necesitamos un output
    this.busquedaEmitida.emit(this.nameForm.value.name)
    this.nameForm.reset()
  }

  //este es el evento del input
  getInputName(event: any) {
    this.busquedaEmitida.emit(event.target.value)
  }


}
