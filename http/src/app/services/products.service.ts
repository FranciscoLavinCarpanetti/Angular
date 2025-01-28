import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { firstValueFrom } from 'rxjs';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //el servicio es el encargado de gestionar la peticiones a las API externas, tiene que poder hacer peticiones http, para ello necesitamos CONFIGURAR la aplicaciones para admitir este tipo de peticiones.
  // en app.config cargamos el modulo provideHttpClient() en el array de configuracion.
  private httpClient = inject(HttpClient);
  private baseUrl = "https://peticiones.online/api/products/";

  getAll(): Promise<IResponse> {
    return firstValueFrom(this.httpClient.get<IResponse>(this.baseUrl))
  }

  getById(_id: string): Promise<IProduct> {
    return firstValueFrom(this.httpClient.get<IProduct>(`${this.baseUrl}${_id}`))
  }

}
