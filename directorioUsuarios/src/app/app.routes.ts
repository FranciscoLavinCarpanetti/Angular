import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserViewComponent } from './pages/user-view/user-view.component';

export const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "usuarios", component: UsersListComponent },
  { path: "usuario/:idUser", component: UserViewComponent },
  { path: "**", redirectTo: 'home' }
];
