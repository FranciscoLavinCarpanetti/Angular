import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IUser } from '../../interface/user.interface';


type UserBody = {
  username?: string, email: string, password: string

};
type RegistreResponse = {
  success: string, user: IUser
};
type LoginResponse = {
  success: string, token: string
};


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  private baseUrl = `${environment.apiUrl}/users`;
  private httpClient = inject(HttpClient);


  register(body: UserBody) {
    return lastValueFrom(
      this.httpClient.post<RegistreResponse>(`${this.baseUrl}/register`, body)
    );
  }


  login(body: UserBody) {
    return lastValueFrom(
      this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
    );
  }

}
