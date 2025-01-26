import { Component } from '@angular/core';
import { UserListComponent } from "./componentes/user-list/user-list.component";
import { FormUserComponent } from "./componentes/form-user/form-user.component";
import { TotalUserComponent } from './componentes/total-user/total-user.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent, FormUserComponent, TotalUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataSphere';
}
