import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { USERS } from '../db/users.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersList: IUser[] = USERS;
  private jobList: string[] = [];

  constructor() {
    // saco del array de usuarios la lista de JObs no repetida en un array simple de string
    this.jobList = Array.from(new Set(USERS.map(user => user.job)));;
  }

  getAll(): IUser[] {
    return this.usersList;
  }

  getById(idUser: number): IUser | undefined {
    return this.usersList.find(user => user.id === idUser)
  }

  getByName(name: string): IUser[] {
    return this.usersList.filter(users => users.name.toLowerCase().includes(name.toLowerCase()))
  }

  getByJob(job: string): IUser[] {
    //opcion 1: con un if
    /* if (job !== "") {
      return this.usersList.filter(users => users.job === job)
    } else {
      return this.usersList
    } */

    //opcion 2: con un ternario
    //return (job !== "") ? this.usersList.filter(users => users.job === job) : this.usersList;

    //opcion 3: con includes
    return this.usersList.filter(users => users.job.includes(job))

  }

  getJobList(): string[] {
    return this.jobList;
  }

  // los datos estan en la BBDD el front no puede hacer nada que no le permita el back
  getByNameJob(name: string, job: string) {
    return this.usersList.filter(user => user.name.includes(name) && user.job.includes(job))
  }

}
