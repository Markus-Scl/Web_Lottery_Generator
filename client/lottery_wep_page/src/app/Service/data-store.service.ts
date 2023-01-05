import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { JWT, LotteryNumbers, User } from '../Types/types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public JWT!: JWT;
  currentUser: Subject<User> = new Subject<User>();
  recentNumbers: BehaviorSubject<LotteryNumbers[]> = new BehaviorSubject<LotteryNumbers[]>([]);

  constructor(private apiService: ApiService) { }
}
