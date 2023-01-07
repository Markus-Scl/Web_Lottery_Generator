import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/Service/data-store.service';
import { User } from 'src/app/Types/types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

  constructor(private router: Router, private dataStoreService: DataStoreService){

  }

  currentUser: User = {
    user_id: 0,
    first_name: "",
    last_name: "",
    email: "",
    admin: false
  };

  ngOnInit(){
    this.dataStoreService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['Lottery-Generator/Login'])
  }

}
