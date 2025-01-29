import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from '../../services/products.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { SelectCategoryComponent } from '../../components/select-category/select-category.component';

@Component({
  selector: 'app-productos',
  imports: [ProductCardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  arrProducts: IProduct[] = [];
  productsService = inject(ProductsService);
  @Input() category: string = '';

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

  async ngOnChanges() {
    if (this.category) {
      try {
        this.productsService.getByCategory(this.category)
      } catch (err) {
        console.log(err);
      }
    }
  }
}
