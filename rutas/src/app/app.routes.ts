import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoViewComponent } from './pages/producto-view/producto-view.component';
//import { C404Component } from './pages/c404/c404.component';

//en este fichero daremos de alta las rutas, asociadas a componentes,
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoViewComponent },
  // { path: '**', component: C404Component }
  { path: '**', redirectTo: 'contacto' }
];
//la ruta ** tiene que se siempre la ultima.
