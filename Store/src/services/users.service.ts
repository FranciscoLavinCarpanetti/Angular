import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IUser } from '../app/interfaces/user.interface';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { CustomPayload } from '../app/guards/admin.guard';


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


  isLogged() {
    if (localStorage.getItem(environment.tokenName)) {
      return true;
    }
    return false;
  }

  isAdmin() {
    const token = localStorage.getItem(environment.tokenName)!;
    const payload = jwtDecode<CustomPayload>(token);
    if (payload.userRole !== 'admin') {
      return false;
    }
    return true;

  }

}
