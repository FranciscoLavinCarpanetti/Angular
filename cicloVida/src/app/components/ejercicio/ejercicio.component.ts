import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  imports: [],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css'
})
export class EjercicioComponent {
  arrEjercicio: any[] = [];

  constructor() {
    console.log('constructor', 1);
  }
  ngOnInit() {
    console.log('ngOnInit', 2);

  }
  ngOnChanges() {
    console.log('ngOnChanges', 3);

  }
  ngDoCheck() {
    console.log('ngDoCheck', 4);
  }



}
