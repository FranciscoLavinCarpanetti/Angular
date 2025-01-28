import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() myProduct!: IProduct;
}
