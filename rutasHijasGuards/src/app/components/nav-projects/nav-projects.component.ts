import { Component, inject } from '@angular/core';
import { IProject } from '../../interfaces/iproject.interface';
import { ProjectsService } from '../../services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-projects',
  imports: [RouterLink],
  templateUrl: './nav-projects.component.html',
  styleUrl: './nav-projects.component.css'
})
export class NavProjectsComponent {
  arrProjects: IProject[] = [];
  projectsService = inject(ProjectsService);

  async ngOnInit() {
    try {
      this.arrProjects = await this.projectsService.getAll()
      console.log(this.arrProjects)
    } catch (err) {
      console.log(err)
    }
  }
}
