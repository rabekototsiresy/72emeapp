import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router'
import {AppRoutingModule } from "./app-routing.module"
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailUserComponent } from './pages/detail-user/detail-user.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CongratulationComponent } from './pages/congratulation/congratulation.component';
import { CardComponent } from './component/card/card.component';
import { CardFullComponent } from './component/card-full/card-full.component';
import { AvatarUploadComponent } from './pages/avatar-upload/avatar-upload.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { SampanaDetailsComponent } from './pages/sampana-details/sampana-details.component';
import { CardMpComponent } from './component/card-mp/card-mp.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFound404Component,
    RegisterComponent,
    HomeComponent,
    DetailUserComponent,
    NavbarComponent,
    CongratulationComponent,
    CardComponent,
    CardFullComponent,
    AvatarUploadComponent,
    ListUserComponent,
    SampanaDetailsComponent,
    CardMpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
