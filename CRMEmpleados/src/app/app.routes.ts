import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/empleados/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';

export const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/nuevo', component: NuevoEmpleadoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }




];
