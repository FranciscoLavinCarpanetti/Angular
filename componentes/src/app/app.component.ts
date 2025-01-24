import { Component } from '@angular/core';
//import { ContadorComponent } from "./components/contador/contador.component";
import { DobleBidingComponent } from "./components/doble-biding/doble-biding.component";


@Component({
  selector: 'app-root',
  imports: [/* ContadorComponent, */ DobleBidingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes';
}
