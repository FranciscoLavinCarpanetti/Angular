import { ExercisesService } from './../../services/exercises.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  ExercisesService = inject(ExercisesService)
  pesoTotal: number = 0;
  repeticinesTotal: number = 0;

  ngDoCheck() {
    let exercises = this.ExercisesService.getAll();
    this.pesoTotal = exercises.reduce((acc, exercise) => acc + exercise.quantity, 0);
    this.repeticinesTotal = exercises.reduce((acc, exercise) => acc + exercise.weight, 0);

  }

}
