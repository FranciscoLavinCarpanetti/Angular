import { IExercise } from './../../../interfaces/iexercise.interface';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  @Input() exercise!: IExercise

}
