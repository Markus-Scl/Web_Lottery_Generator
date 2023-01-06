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
}
