import { UsersService } from './../../services/users.service';
import { Component, Inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-user-list',
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: IUser[] = [];
  UsersService = Inject(UsersService);

  ngOnInit() {
    this.users = this.UsersService.getUsers();
  }

}
