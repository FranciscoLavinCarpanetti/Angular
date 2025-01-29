import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logado: boolean = false;
  router = inject(Router)

  ngDoCheck() {
    if (localStorage.getItem('token')) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }

  logout() {
    //para eliminar y el token y redirigir a login
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
