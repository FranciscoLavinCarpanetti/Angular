import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { NameSearchComponent } from './name-search/name-search.component';
import { SelectJobComponent } from "./select-job/select-job.component";


@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent, NameSearchComponent, SelectJobComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  arrUsuarios: IUser[] = [];
  usersServices = inject(UsersService);

  ngOnInit() {
    this.arrUsuarios = this.usersServices.getAll()
  }

  searchByName(event: string) {
    // al recibir el nombre a buscar tiene que pedirle al servicio los usuario con ese nombre
    this.arrUsuarios = this.usersServices.getByName(event)
  }

  selectByJob(event: string) {
    //al recibir el job filtro mi array de datos con esa job llamando al servicio
    this.arrUsuarios = this.usersServices.getByJob(event);
  }


}
