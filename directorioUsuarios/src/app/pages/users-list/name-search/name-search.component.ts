import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-name-search',
  imports: [ReactiveFormsModule],
  templateUrl: './name-search.component.html',
  styleUrl: './name-search.component.css'
})
export class NameSearchComponent {

  nameForm: FormGroup;

  @Input() busquedaEmitida: EventEmitter<string> = new EventEmitter<string>();


  constructor() {
    this.nameForm = new FormControl({
      name: new FormControl('', [])
    }, []);
  }


  getName() {
    console.log(this.nameForm.value);
    this.busquedaEmitida.emit(this.nameForm.value.name);
  }




}
