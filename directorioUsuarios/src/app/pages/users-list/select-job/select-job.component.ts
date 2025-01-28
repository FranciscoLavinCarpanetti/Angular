import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-select-job',
  imports: [],
  templateUrl: './select-job.component.html',
  styleUrl: './select-job.component.css'
})
export class SelectJobComponent {
  //este selector sus opciones de donde vienen? del servicio de la funcion getJobList.
  @Output() seleccionEmitida: EventEmitter<string> = new EventEmitter();
  jobList: string[] = [];
  usersService = inject(UsersService);

  //cuando se llena esta jobList? cuando se cargue componente ngOnInit
  ngOnInit() {
    //llamando al servicio
    this.jobList = this.usersService.getJobList();
  }


  getJob(event: any) {
    //aqui tengo la seleccion la mando al padre que es userListComponent
    this.seleccionEmitida.emit(event.target.value)
  }

}
