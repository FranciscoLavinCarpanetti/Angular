import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Iproduct } from '../../../interfaces/products.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  newProductForm: FormGroup;
  productsService = inject(ProductsService);
  router = inject(Router)
  arrDptos: string[] = [];

  constructor() {
    this.newProductForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      department: new FormControl(''),
      stock: new FormControl(''),
    });
  }

  async ngOnInit() {
    this.arrDptos = await this.productsService.getDepartments();
  }



  async onSubmit() {
    try {
      const newProduct = await this.productsService.create(this.newProductForm.value);
      Swal.fire('Nuevo Producto', 'Producto registrado correctamente', 'success');
      this.router.navigateByUrl('/products');
    } catch (error) {
      console.log(error);
      Swal.fire('Nuevo Producto', 'ha ocurrido un error en el registro vuelve a intentarlo.', 'error');

    }

  }



}

