import { Injectable } from '@angular/core';
import { IProjets } from '../interfaces/iprojets.interface';
import { PROJECTS } from '../components/db/projects.db';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: IProjets[] = PROJECTS;




  getAll(): IProjets[] {
    return this.projects;
  }



  getById(id: number): IProjets | undefined {
    return this.projects.find(project => project.id === id);
  }

}
