import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IEmpleado } from '../interfaces/iempleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private httpClient = inject(HttpClient)
  private baseUrl = 'https://crm-empleados.onrender.com/api/empleados'


  getAllEmpleados() {


    return lastValueFrom(
      this.httpClient.get<IEmpleado[]>(this.baseUrl)
    );
  }


  createEmpleado(body: IEmpleado) {
    return lastValueFrom(
      this.httpClient.post<IEmpleado>(this.baseUrl, body)
    );


  }

}
