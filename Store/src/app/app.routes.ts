import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/users/register/register.component';
import { LoginComponent } from './pages/users/login/login.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { EditComponent } from './component/editProduct/edit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/register' },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'products', component: ProductsListComponent
  },
  {
    path: 'products/new', component: NewProductComponent, canActivate: [authGuard, adminGuard]
  },
  {
    path: 'products/edit/:productId', component: EditComponent, canActivate: [authGuard, adminGuard]
  },
  { path: '**', redirectTo: '/register' }


];
