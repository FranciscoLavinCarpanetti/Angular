import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.type=interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() miProducto!: IProduct

}
