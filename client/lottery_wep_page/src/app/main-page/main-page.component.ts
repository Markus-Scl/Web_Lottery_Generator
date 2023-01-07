import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../Service/data-store.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private dataStorService: DataStoreService, private router: Router){

  }  
  
  ngOnInit() {
    let tokenString = localStorage.getItem('token');

    if(tokenString === null){
      this.router.navigate(['Lottery-Generator/Login']);
      return;
    }
    console.log("hello");
    let token = JSON.parse(tokenString);

    if(token !== null){
      this.dataStorService.JWT = token;
    }else {
      this.router.navigate(['Lottery-Generator/Login']);
      return;
    }

    this.dataStorService.getUser().subscribe(user => {
      this.dataStorService.currentUser.next(user);
    });

    /*this.dataStorService.currentUser.subscribe(data => {
      console.log("hello2");
      if(data === null){
        this.dataStorService.getUser().subscribe(user => {
          console.log(user);
        });
      }
    });*/
  }
}
