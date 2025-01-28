import { Component } from '@angular/core';
import { SelectJobsComponent } from './select-jobs/select-jobs.component';
import { NameSearchComponent } from './name-search/name-search.component';

@Component({
  selector: 'app-users-list',
  imports: [SelectJobsComponent, NameSearchComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {


  selectByJob(event: string) {
    this.arrUsuarios = this.
}
}
