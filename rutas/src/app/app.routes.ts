import { Routes } from '@angular/router';
import { HomeComponent } from './peges/home/home.component';
import { ContactoComponent } from './peges/contacto/contacto.component';
import { GaleriaComponent } from './peges/galeria/galeria.component';
import { ProductosComponent } from './peges/productos/productos.component';
import { ProductoviewComponent } from './peges/productoview/productoview.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductoviewComponent },






  { path: '**', redirectTo: 'contacto' }

];
