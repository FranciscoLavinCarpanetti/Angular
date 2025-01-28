import { UsersService } from './../../../services/users.service';
import { Component, Inject, Output } from '@angular/core';

@Component({
  selector: 'app-select-jobs',
  imports: [],
  templateUrl: './select-jobs.component.html',
  styleUrl: './select-jobs.component.css'
})
export class SelectJobsComponent {
  @Output() seleccionEmituda: EventEmitter<string> = new EventEmitter<string>();
  jobList: string[] = [];
  UsersService: Inject(UsersService);


  ngOnInit() {
    this.jobList = this.usersService.getJobsList();
  }


  getJobs(event: any) {
    this.seleccionEmituda.emit(event.target.value);

  }
}
