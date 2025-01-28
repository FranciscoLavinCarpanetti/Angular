import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient);
  private baseUrl = "https://peticiones.online/api/products/";




  getAll(): promise<IResponse> {
    return firstValueFrom(this.httpClient.get<IResponse>(this.baseUrl));

  }

  getById(id: string): promise<IResponse> {
    return firstValueFrom(this.httpClient.get<IResponse>(`${this.baseUrl}/${id}`));
  }



  constructor() { }
}
