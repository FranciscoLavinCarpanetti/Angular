import { Component, inject, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-view',
  imports: [RouterLink],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  @Input() idUser: string = "";
  usersService = inject(UsersService)
  router = inject(Router);
  usuario!: IUser;

  ngOnInit() {
    let id: number = Number(this.idUser);
    let response = this.usersService.getById(id)
    if (response) {
      this.usuario = response
    } else {
      alert('Id de usuario no existe')
      this.router.navigate(['/usuarios']);
    }
  }
}
