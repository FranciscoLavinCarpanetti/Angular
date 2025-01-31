import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/empleados/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { LoginComponent } from './pages/usuarios/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'empleados', component: ListaEmpleadosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'empleados/nuevo', component: NuevoEmpleadoComponent,
    canActivate: [authGuard]
  },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }




];
