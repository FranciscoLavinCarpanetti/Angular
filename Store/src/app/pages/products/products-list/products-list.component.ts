
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Iproduct } from '../../../interfaces/products.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [UpperCasePipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Iproduct[] = [];
  arrDptos: string[] = [];
  productsService = inject(ProductsService)


  async ngOnInit() {
    this.products = await this.productsService.getAll();
    this.arrDptos = await this.productsService.getDepartments();

  }


  async onDptoChange($event: any) {
    if ($event.target.value === '')
      this.products = await this.productsService.getAll();
    else
      this.products = await this.productsService.getByDepartment($event.target.value)
  }
}
