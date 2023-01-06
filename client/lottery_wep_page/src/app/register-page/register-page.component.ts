import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from '../Service/data-store.service';
import { UserData } from '../Types/types';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private router: Router, private dataStoreService: DataStoreService){

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForPassword(){
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return
  }

  getErrorMessageForFirstName(){
    if (this.firstName.hasError('required')) {
      return 'You must enter a value';
    }
    return
  }

  getErrorMessageForLastName(){
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
    return
  }

  onLoginClick(){
    this.router.navigate(['Lottery-Generator/Login']);
  }

  onRegisterClick(){
    let userData : UserData = {
      first_name: String(this.firstName.value),
      last_name: String(this.lastName.value),
      email: String(this.email.value),
      password: String(this.password.value)
    }
   
    this.dataStoreService.registerUser(userData).subscribe(data => {
      this.router.navigate(['Lottery-Generator/Login']);
    })
  }
}
