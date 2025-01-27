import { ProductosService } from './../../services/productos.service';
import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.type=interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productoview',
  imports: [],
  templateUrl: './productoview.component.html',
  styleUrl: './productoview.component.css'
})
export class ProductoviewComponent {
  id: number = 0;
  productoData!: IProduct;
  ProductosService = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = Number(params.id);
      let response = this.ProductosService.getById(this.id);
    })

  }

}
