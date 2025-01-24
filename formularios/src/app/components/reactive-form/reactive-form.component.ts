import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  formModel: FormGroup;


  constructor() {
    this.formModel = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      edad: new FormControl(0, [
        Validators.min(18),
        Validators.max(65)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      dni: new FormControl("", [
        this.dniValidator
      ]),
      profesion: new FormControl("", []),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      repitepassword: new FormControl("", []),
    }, [this.passwordValidator])
  }

  passwordValidator(formFields: AbstractControl): any {
    let password = formFields.get('password')?.value;
    let repitepassword = formFields.get('repitepassword')?.value;
    return (password !== repitepassword) ? { 'passwordvalidator': true } : null;
  }

  dniValidator(controlName: AbstractControl): any {
    // validar un dni compete dos acciones
    // que este bien escrito tiene que tener 8 digitos y letra en mayuscula
    // para consedar un email valido la letra sera el resultado de dividir numero del dni por 23 y resto sera la posicion en array de letras de la fabrica de moneda y timbre.
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let dni = controlName.value;
    let exp = /^\d{8}[A-Z]{1}/
    if (exp.test(dni)) {
      //seguimos con el proceso de valicion
      //separar el numero de la letra.
      // "5067893C"
      const letra = dni.at(-1)
      const numero = Number(dni.slice(0, dni.length - 1));
      let posicion = numero % 23;

      return letra !== letrasDni[posicion] ? { 'dnivalidator': 'La letra no es valida para tu dni' } : null;
    } else {
      return { 'dnivalidator': 'Formato del dni es incorrecto' }
    }
  }

  getDataForm() {
    console.log(this.formModel.value)
  }

  checkErrorField(field: string, error: string): boolean {
    if (this.formModel.get(field)?.hasError(error) && this.formModel.get(field)?.touched) {
      return true;
    }
    return false;
  }
}
