import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';
import { SignupService } from './signup.service';
//import { LoginComponent } from './login.component';
const app: Routes=[
  {
    path:'',
    component:FormComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SignupComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(app)
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
