import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // creamos una propiedad privada que almace 5 productos.
  private arrProductos: IProducto[] = [
    {
      id: 1,
      title: 'Producto 1',
      description: 'Descripción del Producto 1',
      size: 'M'
    },
    {
      id: 2,
      title: 'Producto 2',
      description: 'Descripción del Producto 2',
      size: 'L'
    },
    {
      id: 3,
      title: 'Producto 3',
      description: 'Descripción del Producto 3',
      size: 'S'
    },
    {
      id: 4,
      title: 'Producto 4',
      description: 'Descripción del Producto 4',
      size: 'XL'
    },
    {
      id: 5,
      title: 'Producto 5',
      description: 'Descripción del <strong class="red">Producto 5</strong>  ',
      size: 'M'
    },
    {
      id: 6,
      title: 'Producto 6',
      description: 'Descripción del <strong>Producto 6</strong>',
      size: 'M'
    },
    {
      id: 7,
      title: 'Producto 7',
      description: 'Descripción del <strong>Producto 7</strong>',
      size: 'XXL'
    }

  ]
  // este me sirve para pintar un listado de productos
  getAll(): IProducto[] {
    return this.arrProductos;
  }

  // esta me sirve para pintar un producto por id.
  getById(id: number): IProducto | undefined {
    return this.arrProductos.find(producto => producto.id === id);
  }
}
