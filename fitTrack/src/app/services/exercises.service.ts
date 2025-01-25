import { Injectable } from '@angular/core';
import { IExercise } from '../interfaces/iexercise.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private arrExercises: IExercise[] = [];
  private id: number = 1;

  insertExercise(newexercise: IExercise): any {
    let busqueda = this.arrExercises.find(exercise => exercise.title.toLocaleLowerCase() === newexercise.title.toLocaleLowerCase());
    if (busqueda === undefined) {
      newexercise.id = this.id;
      this.arrExercises.push(newexercise);
      this.id++;
      return { status: 200, message: 'Ejercicio añadido correctamente' };
    } else {
      busqueda.quantity += newexercise.quantity;
      return { status: 200, message: 'Ejercicio actualizado correctamente' };
    }

  }
  getAll(): IExercise[] {
    return this.arrExercises;
  }


}




