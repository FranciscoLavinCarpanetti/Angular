import { UsersService } from './../../services/users.service';

import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  formUser: FormGroup;
  UsersService = Inject(UsersService);
  formModel: any;

  constructor() {
    this.formUser = new FormGroup({
      name: new FormControl('', []),
      lastname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      data: new FormControl('', []),
      gender: new FormControl('', []),
      address: new FormControl('', []),
      socialnetwork: new FormControl('', [])
    }, []);
  }
  getDataUser() {
    const respuesta = this.UsersService.inserUser(this.formUser.value);
    alert(respuesta.message);
    this.formUser.reset();
  }
  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field)?.hasError(error) && this.formModel) {
      return true;
    }
    return false;
  }


}
