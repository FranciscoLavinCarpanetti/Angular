import { ProductsService } from './../../services/products.service';
import { Component, Inject } from '@angular/core';
import { Iproduct, IResponse } from '../../interface/iproducts.type=interface';
import { __await } from 'tslib';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  arrProductos: Iproduct[] = [];
  ProductsService = Inject(ProductsService);


  async ngOnInit() {
    try {
      let response: IResponse = await this.ProductsService.getAll();
      this.arrProductos = response.results;
    } catch (err) {
      console.log(err);
    }
  }
}
