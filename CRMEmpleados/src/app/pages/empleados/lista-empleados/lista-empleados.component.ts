import { IEmpleado } from '../../../interfaces/iempleado.interface';
import { EmpleadosService } from './../../../services/empleados.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  imports: [],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {
  arrEmpleados: IEmpleado[] = [];


  EmpleadosService = inject(EmpleadosService)



  async ngOnInit() {
    this.arrEmpleados = await this.EmpleadosService.getAllEmpleados();


  }




}
