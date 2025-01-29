import { ProjectsService } from './../../services/projects.service';

import { Component, inject, } from '@angular/core';
import { IProjets } from '../../interfaces/iprojets.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-projects',
  imports: [RouterLink],
  templateUrl: './nav-projects.component.html',
  styleUrl: './nav-projects.component.css'
})
export class NavProjectsComponent {
  arrProject: IProjets[] = [];
  ProjectsService = inject(ProjectsService);


  async ngOnInit() {
    try {
      this.arrProjets = await this.ProjectsService.getAll();
      console.log(this.arrProjets);
    } catch (err) {
      console.log(err);
    }
  }

}
