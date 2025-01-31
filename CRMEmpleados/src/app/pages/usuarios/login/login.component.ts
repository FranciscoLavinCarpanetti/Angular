import { UsuariosService } from './../../../services/usuarios.service';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  UsuariosService = inject(UsuariosService)
  router = inject(Router)

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', []),
    }, []);
  }

  async onSubmit() {
    try {
      const response = await this.UsuariosService.logion(this.loginForm.value);
      localStorage.setItem('crm_token', response.token);
      this.router.navigateByUrl('/empleados');

    } catch (error) {
      console.log('Error');

    }
  }

}
