import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/iproduct.interface';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: IProduct;
}
