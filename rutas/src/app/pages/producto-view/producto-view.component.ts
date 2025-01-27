import { Component, inject, Input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto.interface';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-view',
  imports: [RouterLink],
  templateUrl: './producto-view.component.html',
  styleUrl: './producto-view.component.css'
})
export class ProductoViewComponent {
  //id: number = 0;
  productoData!: IProducto;
  //necesito el servicio
  productosServices = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  //opcion 2: @Input() para rutas
  @Input() id: string = "";

  ngOnInit() {

    let response = this.productosServices.getById(Number(this.id))
    if (response) {
      this.productoData = response
    } else {
      //debo redirigir la ruta 404
      //siempre que hagamos algo en ts y tengamos que redirigir a algun sitio vamos a usar el Router, es un inyectable que me permite hacer redirecciones internas.
      this.router.navigate(['**'])
      //this.router.navigateByUrl('http://www.google.com')
    }


    //tengo que capturar la ruta dinamica - ruta activa. Para ello necesito un inyectable que se llama ActivatedRoute. Tiene un observable que esta continuamente revisando la parte dinamica de la ruta, cuando cambiar me avisa.

    //opcion 1 ActivatedRoute
    /*
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = Number(params.id);
      let response = this.productosServices.getById(this.id)
      if (response) {
        this.productoData = response
        console.log(this.productoData)
      } else {
        alert('Producto desconocido')
      }
    })
    */
  }

}
