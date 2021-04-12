import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usernameLogged = "";
  id: any="";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('token');
    const user:any = jwt_decode(token)
    this.usernameLogged = user.username;
    this.id = user._id
  
  }

  signOutFromService(){
    this.authService.signOut()
  }

}
