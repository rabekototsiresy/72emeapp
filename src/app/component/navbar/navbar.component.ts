import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/services/auth/auth.service';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faSignOutAlt: any = faSignOutAlt;
  usernameLogged = "";
  id: any="";
  imageLink="http://localhost:7000/public/uploads/images/";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('token');
    const user:any = jwt_decode(token)
    this.usernameLogged = user.username;
    this.id = user._id
    this.imageLink += user.avatar ? user.avatar : "default.png"
  
  }

  signOutFromService(){
    this.authService.signOut()
  }

}
