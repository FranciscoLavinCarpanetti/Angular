import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/users/register/register.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/register' },
  {
    path: 'register', component: RegisterComponent
  },
  { path: '**', redirectTo: '/register' }


];
