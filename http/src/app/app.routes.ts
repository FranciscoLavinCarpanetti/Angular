import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'product/:idProduct', component: ProductViewComponent },
  { path: '**', component: NotFoundComponent }
];
