import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User, UserData } from '../Types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private registerUri = 'lottery-generator/api/register'

  constructor(private http: HttpClient) {

   }

   registerUser(userData: UserData): Observable<User>{
    console.log("apiService");
    console.log(userData)
    return this.http.post<User>(this.registerUri, userData)
    .pipe(
      //console.error("")
    );
   }
}
