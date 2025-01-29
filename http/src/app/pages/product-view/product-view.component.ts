import { RouterLink } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from './../../services/products.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-product-view',
  imports: [RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  @Input() idProduct: string = '';
  ProductsService = inject(ProductsService);
  producto!: IProduct;

  async ngOnInit() {
    try {
      this.producto = await this.ProductsService.getById(this.idProduct);
    } catch (error) {
      console.log('Error: ', error);


    }
  }

}
