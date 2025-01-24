import { Component } from '@angular/core';
import { FormProductComponent } from "./components/form-product/form-product.component";
import { TotalComponent } from "./components/total/total.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [FormProductComponent, TotalComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controlStock';
}
