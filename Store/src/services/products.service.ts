import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Iproduct } from '../app/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = `${environment.apiUrl}/products`;
  private HttpClient = inject(HttpClient);


  getAll() {
    return lastValueFrom(
      this.HttpClient.get<Iproduct[]>(this.baseUrl)
    );
  }

  getByDepartment(department: string) {
    return lastValueFrom(
      this.HttpClient.get<Iproduct[]>(`${this.baseUrl}/dptm/${department}`)
    );
  }

  getByPrice(minPrice: number) {
    return lastValueFrom(
      this.HttpClient.get<Iproduct[]>(`${this.baseUrl}/price/${minPrice}`)
    );
  }

  getById(productId: string) {
    return lastValueFrom(
      this.HttpClient.get<Iproduct | null>(`${this.baseUrl}/${productId}`)
    );
  }

  create(body: Iproduct) {
    return lastValueFrom(
      this.HttpClient.post<Iproduct>(this.baseUrl, body)
    );
  }

  async getDepartments() {
    const products = await this.getAll();
    return [...new Set(products.map(p => p.department))];
  }


}
