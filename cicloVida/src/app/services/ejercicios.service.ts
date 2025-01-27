import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  private listadoEjercicios: any[] = [
    { title: 'Ejercicio 1', time: '00:20:00', reps: 12 },
    { title: 'Ejercicio 2', time: '00:12:00', reps: 12 },
    { title: 'Ejercicio 3', time: '00:10:00', reps: 5 },
  ]

  getAll(): any[] {
    return this.listadoEjercicios;
  }

}
