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
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)

      ]),
      quantity: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      weight: new FormControl('', [
        Validators.required,
        Validators.min(10),
        Validators.max(80)
      ])
    }, []);
  }


  getDataExercise() {
    const respuesta = this.ExercisesService.insertExercise(this.exerciseForm.value);
    alert(respuesta.message);
    this.exerciseForm.reset();

  }

  checkErrorFiled(field: string, error: string): boolean {
    if (this.formModel.get(field)?.hasError(error) && this.formModel) {
      return true;

    }
    return false
  }


}
