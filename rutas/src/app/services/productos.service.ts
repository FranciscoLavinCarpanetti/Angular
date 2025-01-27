import { IProduct } from './../interfaces/iproduct.type=interface';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.type=interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private arrProductos: any[] = [
    {
      id: 1,
      description: 'Producto 1',
      size: 'M'
    },
    {
      id: 2,
      description: 'Producto 2',
      size: 'L'
    },
    {
      id: 3,
      description: 'Producto 3',
      size: 'S'
    },
    {
      id: 4,
      description: 'Producto 4',
      size: 'XL'
    },
    {
      id: 5,
      description: 'Producto 5',
      size: 'M'
    }
  ];



  getAll(): IProduct[] {
    return this.arrProductos;
  }

  getById(id: number): IProduct {
    return this.arrProductos.find(producto => producto.id === id);
  }
}
