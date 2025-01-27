import { Component, Input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-card',
  imports: [RouterLink],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {
  @Input() miProducto!: IProducto
}
