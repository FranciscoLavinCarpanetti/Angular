import { UsuariosService } from './../../../services/usuarios.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  UsuariosService = inject(UsuariosService)

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
    } catch (error) {
      console.log('Error');

    }
  }

}
