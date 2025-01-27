import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { JOBS, USERS } from '../db/users.db';

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
    return this.usersList.filter(users => users.job === job)
  }

  getJobList(): string[] {
    return this.jobList;
  }

}
