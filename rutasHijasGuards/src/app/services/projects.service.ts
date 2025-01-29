import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/iproject.interface';
import { PROJECTS } from '../db/projects.db';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: IProject[] = PROJECTS;

  getAll(): IProject[] {
    return this.projects;
  }

  getById(id: number): IProject | undefined {
    return this.projects.find(project => project.id === id);
  }
}
