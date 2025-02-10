import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IUser } from '../app/interfaces/user.interface';
import { environment } from '../environments/environment';


type UserBody = { username?: string, email: string, password: string };
type RegisterResponse = { success: string, user: IUser };
type LoginResponse = { success: string, token: string };

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = `${environment.apiUrl}/users`;
  private httpClient = inject(HttpClient);

  register(body: UserBody) {
    return lastValueFrom(
      this.httpClient.post<RegisterResponse>(`${this.baseUrl}/register`, body)
    );
  }

  login(body: UserBody) {
    return lastValueFrom(
      this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
    );
  }

}
