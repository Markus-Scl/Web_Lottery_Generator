import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private router: Router){

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForPassword(){
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return
  }

  onLoginClick(){
    alert('logged in');
  }

  onRegisterClick(){
    this.router.navigate(['Lottery-Generator/Register']);
  }
}
