import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';

import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-select-category',
  imports: [],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {
  categorias: string[] = [];
  private productsService = inject(ProductsService);
  router = inject(Router);





  ngOnInit() {
    this.productsService.getByCategoryList().then((data) => {
      this.categorias = data;
    });
  }
  getCategory(category: string) {
    this.router.navigate(['/products'], { queryParams: { category: category } });
  }
}


