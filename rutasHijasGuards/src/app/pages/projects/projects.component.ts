import { Component } from '@angular/core';
import { NavProjectsComponent } from "../../components/nav-projects/nav-projects.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NavProjectsComponent, RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
