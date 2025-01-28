import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from '../../services/products.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-productos',
  imports: [ProductCardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  arrProducts: IProduct[] = [];
  productsService = inject(ProductsService);

  async ngOnInit() {
    //opcion 1: async await
    try {
      let response: IResponse = await this.productsService.getAll()
      this.arrProducts = response.results;
      console.log(this.arrProducts);
    } catch (err) {
      console.log(err);
    }

    //opcion 2: then catch
    /* this.productsService.getAll()
      .then((response) => {
        let data: IResponse = response;
        this.arrProducts = data.results;
      })
      .catch((err) => {
        console.log(err)
      }) */
  }


}
