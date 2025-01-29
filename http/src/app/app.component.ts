import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectCategoryComponent } from './components/select-category/select-category.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SelectCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http';
}
