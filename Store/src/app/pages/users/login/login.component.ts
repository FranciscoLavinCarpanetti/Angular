import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  usersService = inject(UsersService)
  router = inject(Router)




  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[@$!%*?&]).{10,}$/)])
    });
  }

  async onSubmit() {

    try {
      const response = await this.usersService.login(this.loginForm.value);
      Swal.fire('Login', 'Usuario logueado correctamente', 'success');
      localStorage.setItem(environment.tokenName, response.token);
      this.router.navigateByUrl('/product');

    } catch (error) {
      console.log(error);
      Swal.fire('Login', 'ha ocurrido un error en el login vuelve a intentarlo.', 'error');
    }

  }



}
