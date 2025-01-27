import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form-product',
  imports: [ReactiveFormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  productForm: FormGroup;
  //el formulario recoge la informacion para pasarla al servicio. Para poder usar el servicio tenemos que inyectarlo.
  productsServices = inject(ProductsService);

  //todo: validar que el title es requerido, que precio no puede ser 0, y la cantidad no puede ser 0.
  constructor() {
    this.productForm = new FormGroup({
      title: new FormControl("", [
        Validators.required
      ]),
      price: new FormControl(0, [
        Validators.min(1)
      ]),
      quantity: new FormControl(0, [
        Validators.min(1)
      ]),
    }, [])
  }

  getDataProduct() {
    //cuando tengo los datos del formulario, llamar al servicio, enviar los datos y gestionar la respuesta.
    const respuesta = this.productsServices.insert(this.productForm.value);
    alert(respuesta.message)
    this.productForm.reset();

  }


  checkFildError(nameField: string, errorField: string) {
    if (this.productForm.get(nameField)?.hasError(errorField) && this.productForm.get(nameField)?.touched) {
      return true;
    }
    return false;
  }

}
