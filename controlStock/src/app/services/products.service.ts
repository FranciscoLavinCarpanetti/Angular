import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private arrProductos: IProduct[] = [];
  private id: number = 1;

  insert(newProduct: IProduct): any {
    //antes hay que buscar el producto a ver si existe
    let busqueda = this.arrProductos.find(product => product.title.toLowerCase() === newProduct.title.toLowerCase())
    if (busqueda === undefined) {
      // insert product debera comprobar que el producto no existe, si no existe crea el producto y aumenta el id.
      //ponerle a producto su id.
      newProduct.id = this.id
      //insertarlo en array - push
      this.arrProductos.push(newProduct);
      //incrementar en 1 el id para el siguiente producto
      this.id++;
      console.log(this.arrProductos)
      return { message: 'producto insertado correctamente' }
    } else {
      // si existe, coge el producto y le aumenta la cantidad, pero no se aumenta el id
      //busqueda // {title: 'leche', quantity: 10}
      //newProduct // {title: 'leche', quantity: 30}
      busqueda.quantity += newProduct.quantity;
      console.log(this.arrProductos)
      return { message: 'la cantidad de producto ha sido actualizada' }
    }

  }

  //funcion que me permita obtener todo el listado de productos
  getAll(): IProduct[] {
    return this.arrProductos;
  }

}
