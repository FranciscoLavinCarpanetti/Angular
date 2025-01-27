import { ProductosService } from './../../services/productos.service';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.type=interface';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-productos',
  imports: [ProductCardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: IProduct[] = []

  ProductosService = inject(ProductosService);



  ngOnInit() {
    this.productos = this.ProductosService.getAll();

  }

}
