import { ExercisesService } from './../../services/exercises.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-exercise',
  imports: [ReactiveFormsModule],
  templateUrl: './form-exercise.component.html',
  styleUrl: './form-exercise.component.css'
})
export class FormExerciseComponent {
  exerciseForm: FormGroup;

  ExercisesService = inject(ExercisesService);
  formModel: any;

  constructor() {
    this.exerciseForm = new FormGroup({
      title: new FormControl('', [

      ]),
      quantity: new FormControl('', []),
      weight: new FormControl('', [])
    }, []);
  }


  getDataExercise() {
    const respuesta = this.ExercisesService.insertExercise(this.exerciseForm.value);
    alert(respuesta.message);
    this.exerciseForm.reset();

  }

}
