import { Component, inject } from '@angular/core';
import { IData } from '../../../interfaces/idata.interface';
import { ProjectsService } from '../../../services/projects.service';
import { IProject } from '../../../interfaces/iproject.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  imports: [],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {
  data!: IData
  type: string | undefined = ""
  projectsService = inject(ProjectsService);
  router = inject(Router)

  ngOnInit() {
    //como captura la ruta para obtener informacion de la misma no siendo dinamica.
    let arrayRuta = this.router.url.split('/')
    this.type = arrayRuta.at(-1);

    // llamamos al servicio para traernos el data de este proyecto
    if (this.type) {
      let response = this.projectsService.getByName(this.type);
      if (response) {
        this.data = response.data
        console.log(this.data);
      }
    }
  }

}
