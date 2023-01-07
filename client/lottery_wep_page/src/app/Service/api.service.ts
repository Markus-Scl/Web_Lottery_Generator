import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { JWT, LoginData, User, UserData } from '../Types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private registerUri = 'lottery-generator/api/register';
  private loginUri = 'lottery-generator/api/login';
  private userUri = 'lottery-generator/api/user';

  constructor(private http: HttpClient) {

   }

   registerUser(userData: UserData): Observable<User>{
    return this.http.post<User>(this.registerUri, userData)
    .pipe(
      //console.error("")
    );
   }

   loginUser(loginData: LoginData): Observable<JWT>{
      return this.http.post<JWT>(this.loginUri, loginData);
   }

   getUser(jwt: JWT): Observable<User>{
    return this.http.get<User>(`${this.userUri}/${jwt.id}`, {
      headers: {
        Authorization: `Bearer ${jwt.token}`
      }
    });
   }
}
