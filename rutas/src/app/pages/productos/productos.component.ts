import { Component, inject } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto.interface';
import { ProductosService } from '../../services/productos.service';
import { ProductoCardComponent } from "../../components/producto-card/producto-card.component";

@Component({
  selector: 'app-productos',
  imports: [ProductoCardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: IProducto[] = []
  //inyectamos el servicio
  productosService = inject(ProductosService);

  //llenamos el array cuando esta cargado todo el componente ngOnInit
  ngOnInit() {
    this.productos = this.productosService.getAll();
    console.log(this.productos)
  }

}
