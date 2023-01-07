import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ApiService } from './Service/api.service';
import { DataStoreService } from './Service/data-store.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';

import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToolbarComponent } from './main-page/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LotteryDrawPageComponent } from './main-page/lottery-draw-page/lottery-draw-page.component';

const routes: Routes = [
  { path: 'Lottery-Generator/Login', component: LoginPageComponent },
  { path: '',   redirectTo: 'Lottery-Generator/Login', pathMatch: 'full' },
  { path: 'Lottery-Generator/Register', component: RegisterPageComponent },
  { path: 'Lottery-Generator/Main-Page', component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    ToolbarComponent,
    LotteryDrawPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    NgbModule
  ],
  providers: [ApiService, DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
