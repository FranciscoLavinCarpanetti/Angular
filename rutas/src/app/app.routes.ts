import { Routes } from '@angular/router';
import { HomeComponent } from './peges/home/home.component';
import { ContactoComponent } from './peges/contacto/contacto.component';
import { GaleriaComponent } from './peges/galeria/galeria.component';
import { C404Component } from './peges/c404/c404.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', redirectTo: 'contacto' }

];
