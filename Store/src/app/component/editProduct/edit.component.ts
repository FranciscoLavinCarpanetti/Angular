import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProductForm: FormGroup;
  productsService = inject(ProductsService)
  router = inject(Router)
  arrDptos: string[] = [];
  @Input() productId: string = '';

  constructor() {
    this.editProductForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(20)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      department: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  async ngOnInit() {
    this.arrDptos = await this.productsService.getDepartments();
    const product = await this.productsService.getById(this.productId);
    const { name, description, price, department, stock } = product!;
    this.editProductForm.setValue({ name, description, price, department, stock });
  }



  async onSubmit() {
    try {
      const product = await this.productsService.updateById(this.productId, this.editProductForm.value)
      Swal.fire('Edicion', `Se ha actualizado el producto: ${product.name}`, 'success')
      this.router.navigateByUrl('/products');
    } catch (error) {
      Swal.fire('Edicion', 'Ha ocurrido un error. Vuelve a intentarlo', 'error')

    }

  };

}



