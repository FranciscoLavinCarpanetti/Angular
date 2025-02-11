import { UsersService } from './../../../../services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  UsersService = inject(UsersService);
  router = inject(Router)

  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[@$!%*?&]).{10,}$/)])
    });
  }

  async onSubmit() {

    try {
      const response = await this.UsersService.register(this.registerForm.value);
      Swal.fire('registro', 'Usuario registrado correctamente', 'success');
      this.router.navigateByUrl('/login');


    } catch (error) {
      console.log(error);
      Swal.fire('Registro', 'ha ocurrido un error en el registro vuelve a intentarlo.', 'error');

    }

  }

}
