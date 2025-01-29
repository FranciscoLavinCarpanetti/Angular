import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  usersService = inject(UsersService);
  router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", []),
      password: new FormControl("", [])
    }, [])
  }

  async getLogin() {
    // aqui tenemos el email y password que vamos a enviar al servicio
    try {
      let response = await this.usersService.login(this.loginForm.value)
      //guardar el estado de la aplicacion para saber que me logado.
      // obtener localstorage.getItem(), guardar localstorage.setItem(), borrar localstorage.removeItem()
      //guardo el token en el localstorage para mantener el estado de la aplicacion.
      localStorage.setItem('token', response.token)
      this.router.navigate(['/panel'])
    } catch (result: any) {
      Swal.fire({
        title: 'Ha ocurrido un error!',
        text: result.error.error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }
}
