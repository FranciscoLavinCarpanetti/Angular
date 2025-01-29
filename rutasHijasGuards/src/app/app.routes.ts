import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WebComponent } from './pages/projects/web/web.component';
import { DesingComponent } from './pages/projects/desing/desing.component';
import { MarketingComponent } from './pages/projects/marketing/marketing.component';

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  {
    path: "projects", component: ProjectsComponent, children: [
      { path: "", pathMatch: 'full', redirectTo: 'web' },
      { path: "web", component: WebComponent },
      { path: "desing", component: DesingComponent },
      { path: "marketing", component: MarketingComponent },
    ]
  },
  { path: "**", redirectTo: "/home" }
];
