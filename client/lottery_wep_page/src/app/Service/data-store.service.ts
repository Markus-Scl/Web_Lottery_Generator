import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { JWT, LoginData, LotteryNumbers, User, UserData } from '../Types/types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public JWT!: JWT;
  currentUser: Subject<User> = new Subject<User>();
  recentNumbers: BehaviorSubject<LotteryNumbers[]> = new BehaviorSubject<LotteryNumbers[]>([]);

  constructor(private apiService: ApiService, private router: Router) { 

  }

  registerUser(userData: UserData): Observable<User> {
    return this.apiService.registerUser(userData);
  }

  loginUser(loginData: LoginData): Observable<JWT>{
    return this.apiService.loginUser(loginData);
  }

  getUser(): Observable<User>{
    return this.apiService.getUser(this.JWT);
  }
}
