import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStoreService } from '../Service/data-store.service';
import { JWT, LoginData } from '../Types/types';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
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

  onLoginClick(){
      let loginData: LoginData = {
        email: String(this.email.value),
        password: String(this.password.value)
      };

      this.dataStoreService.loginUser(loginData).subscribe((jwt : JWT) => {
        this.dataStoreService.JWT = jwt;
        this.dataStoreService.JWT.id = jwt.token.split('.')[1];
        localStorage.setItem('token', JSON.stringify(this.dataStoreService.JWT));
        this.router.navigate(['Lottery-Generator/Main-Page']);
      });
  }

  onRegisterClick(){
    this.router.navigate(['Lottery-Generator/Register']);
  }
}
