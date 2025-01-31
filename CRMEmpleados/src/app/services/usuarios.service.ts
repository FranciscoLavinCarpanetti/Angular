import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { lastValueFrom } from 'rxjs';

type loginResponse = { success: string, token: string }

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private HttpClient = inject(HttpClient)
  private baseUrl = 'https://crm-empleados.onrender.com/api/usuarios'


  registo(body: IUsuario) {
    return lastValueFrom(
      this.HttpClient.post<{ success: string }>(`${this.baseUrl}/registro`, body)
    );
  }



  logion(body: IUsuario) {
    return lastValueFrom(
      this.HttpClient.post<loginResponse>(`${this.baseUrl}/login`, body)
    );
  }


  isLogged() {
    if (localStorage.getItem('crm_token')) {
      return true;
    }
    return false;

  }


}
