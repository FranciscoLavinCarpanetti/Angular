import { Component, inject, Input } from '@angular/core';
import { EjerciciosService } from '../../services/ejercicios.service';

@Component({
  selector: 'app-ejercicios',
  imports: [],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {
  arrEjercicios: any[] = [];
  @Input() algo: number = 0;

  //inyecto el servicio
  ejerciciosServices = inject(EjerciciosService)

  //funciones de ciclo de vida: Son funciones que se ejecutan en proceso del componente, creadas por angular. Se ejecuta siempre y yo puedo engarchar acciones dentro de esas funciones.

  constructor() {
    // se ejecuta solo una vez, cuando se carga la clase del componente, este ts.
    console.log('CONSTRUCTOR', 1, this.algo)
  }

  ngOnInit() {
    //se ejecuta solo una vez, cuando se carga todo el componente, es decir ts, html, css, y selector del componente <app-></app->
    console.log('NGONINIT', 2, this.algo)

  }

  ngOnChanges() {
    // se ejecuta siempre que recibamos nuevos @Inputs, inicialmente se ejecuta siempre antes del ngOnInit
    console.log('NGONCHANGES', 3, this.algo)
  }

  ngDoCheck() {
    //por ejecuta un monton de veces, entonces debemos usarla solo en compoentes que requieran de refrescar datos cuando el usuario interactua con el interfaz.
    console.log('DOCHECK', 4)
    this.arrEjercicios = this.ejerciciosServices.getAll()
    console.log(this.arrEjercicios)
  }

  ngAfterViewInit() {
    console.log('despues de la carga del html')
  }



  ngOnDestroy() {
    //ultima funcion que se ejecuta. Cuando desactivamos el componente. Cuando cambiamos de ruta, ocultamos un componente @if()
    // puedo asignar guardado de datos antes de salir del componente por ejemplo.
    console.log('destroy')
  }

}
