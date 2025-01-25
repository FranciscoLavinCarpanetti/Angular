import { Component } from '@angular/core';
import { FormExerciseComponent } from './components/form-exercise/form-exercise.component';
import { TotalComponent } from './components/total/total.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';


@Component({
  selector: 'app-root',
  imports: [FormExerciseComponent, TotalComponent, ExerciseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitTrack';
}
