import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productos: IProduct[] = [];
  //inyectamos el servicio para llenar la lista de productos
  productsServices = inject(ProductsService);

  ngOnInit() {
    //todas las partes de mi componentes incluido html y css esta cargadas, luego aqui es donde lleno mi array.
    this.productos = this.productsServices.getAll();
    console.log(this.productos);

  }



}
