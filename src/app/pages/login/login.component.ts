import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: any = "";

  errorMessageSusbscription: Subscription = new Subscription();
  constructor(private userService: UserService,private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginFromService(info: NgForm){
   this.authService.login(info.value)
   this.errorMessageSusbscription = this.authService.errorMessageSubject.subscribe(
    response=>{
        this.errorMessage = response
    },
    error=>{
      console.log(error)
    }
   )
  }



}
