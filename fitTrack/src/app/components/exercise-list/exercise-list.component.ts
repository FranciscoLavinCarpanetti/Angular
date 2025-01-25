import { ExercisesService } from './../../services/exercises.service';
import { Component, inject } from '@angular/core';
import { IExercise } from '../../interfaces/iexercise.interface';
import { ExerciseComponent } from "./exercise/exercise.component";

@Component({
  selector: 'app-exercise-list',
  imports: [ExerciseComponent, ExerciseComponent],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {

  exercises: IExercise[] = [];
  ExercisesService = inject(ExercisesService);

  ngOnInit() {
    this.exercises = this.ExercisesService.getAll();
  }

}
