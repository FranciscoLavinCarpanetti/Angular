import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private arrUsers: IUser[] = [];
  private id: number = 1;
  private email: string = '';

  insertUser(newUser: IUser): any {
    let busqueda = this.arrUsers.find(user => user.email.toLocaleLowerCase() === newUser.email.toLocaleLowerCase());
    if (busqueda === undefined) {
      newUser.email = this.email;
      this.arrUsers.push(newUser);
      this.id++;
      return { status: 200, message: 'Usuario creado correctamente' };

    } else {
      return { status: 400, message: 'El email ya existe' };

    }
  }
  getAll(): IUser[] {
    return this.arrUsers;
  }
}
