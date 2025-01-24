import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  productsService = inject(ProductsService)
  cantidadTotal: number = 0;
  precioTotal: number = 0;

  ngOnInit() {
    //ngOnInit solo se ejecuta una vez

  }

  ngOnChanges() {
    // esta funcion se ejecuta cada vez que el valor @Input() cambia y al principio de la carga del component
  }

  ngDoCheck() {
    //cuando el usuario toque el intefaz
    let productos = this.productsService.getAll()
    this.cantidadTotal = productos.reduce((acc, producto) => acc + producto.quantity, 0);
    this.precioTotal = productos.reduce((acc, producto) => acc + (producto.price * producto.quantity), 0);

  }


}
