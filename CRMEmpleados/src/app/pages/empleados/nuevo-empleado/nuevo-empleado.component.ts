import { EmpleadosService } from './../../../services/empleados.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent {
  arrErrores: { field: string, message: string }[] = [];
  empleadoForm: FormGroup;
  EmpleadosService = inject(EmpleadosService);


  constructor() {
    this.empleadoForm = new FormGroup({
      nombre: new FormControl('', []),
      apellido: new FormControl('', []),
      email: new FormControl('', []),
      telefono: new FormControl('', []),
      departamento: new FormControl('', []),
      salario: new FormControl('', [])
    }, []);

  }


  async onSubmit() {
    try {
      const empleado = await this.EmpleadosService.createEmpleado(this.empleadoForm.value);
      console.log(empleado)
    } catch ({ error, status, message }: any) {
      this.arrErrores = error;
    };
  }

}
