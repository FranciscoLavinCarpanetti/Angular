import { Component } from '@angular/core';
//import { ArrobaForComponent } from "./components/arroba-for/arroba-for.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ArrobaSwitchComponent } from "./components/arroba-switch/arroba-switch.component";
// import { ArrobaIfComponent } from './components/arroba-if/arroba-if.component';
// import { MenuTabsComponent } from "./components/menu-tabs/menu-tabs.component";


@Component({
  selector: 'app-root',
  imports: [/* ArrobaIfComponent,MenuTabsComponent ArrobaForComponent,PeliculasComponent,*/  ArrobaSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controlFlow';
}
