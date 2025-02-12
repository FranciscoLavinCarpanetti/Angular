import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  userService = inject(UsersService);
  router = inject(Router)


  onClickLogout() {
    localStorage.removeItem(environment.tokenName);
    this.router.navigateByUrl('/login');
  }

}
