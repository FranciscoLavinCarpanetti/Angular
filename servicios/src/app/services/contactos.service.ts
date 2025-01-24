import { Injectable } from '@angular/core';
import { IContacto } from '../interfaces/icontacto.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private arrayContactos: IContacto[] = [
    { id: 1, name: 'Juan', phone: '21345678' },
    { id: 2, name: 'Maria', phone: '312456' },
    { id: 3, name: 'Pepe', phone: '345635647' },
    { id: 4, name: 'Lucia', phone: '54665656' },
    { id: 5, name: 'David', phone: '65464566' },
  ]
  //si tuvieramos bbdd no tendriamos que crear un id
  private id: number = 6;

  getAll(): IContacto[] {
    return this.arrayContactos;
  }

  //{ name: 'Raquel', phone: '35467' }
  insert(newContacto: IContacto): string {
    //antes de insertar tenemos que comprobar que no existe en la bbdd
    newContacto.id = this.id;
    let contactoDuplicado = this.arrayContactos.findIndex(contacto => contacto.phone === newContacto.phone);
    if (contactoDuplicado === -1) {
      this.arrayContactos.push(newContacto);
      this.id++;
      return 'Usuario registrado'
    } else {
      return 'Usuario duplicado'
    }
  }


}
