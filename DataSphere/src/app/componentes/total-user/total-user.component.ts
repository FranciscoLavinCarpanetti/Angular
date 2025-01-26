import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-total-user',
  imports: [],
  templateUrl: './total-user.component.html',
  styleUrl: './total-user.component.css'
})
export class TotalUserComponent {
  UsersService = inject(UsersService)
  totalUsers: number = 0;

  ngDoCheck() {
    let users = this.UsersService.getUsers();
    this.totalUsers = users.reduce((acc, user) => acc + user.email, 0);
  }


}
