import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged = false;
  errorMessage = ""

  errorMessageSubject = new Subject();


  constructor(private httpClient: HttpClient,private router: Router) { }

  emitErrorMessageSubject(){
    this.errorMessageSubject.next(this.errorMessage)
  }

  login(info: any){
    this.httpClient.post("http://localhost:7000/api/v1/beazina/login",info).subscribe(
      (response: any)=>{
        const token = response.token;
        localStorage.setItem('token',token)
        let userLogged:any = jwt_decode(token)
        if(userLogged.role == 'mpiandraikitra'){
          this.logged = true;
          this.router.navigate(['home'])
        }else{
          this.logged = true;
          this.router.navigate(['user',userLogged.userId])
        }
      },
      error=>{
        this.errorMessage = error.error.message
        this.emitErrorMessageSubject();
      }
    )
  }


  signOut(){
    this.logged  = false;
    localStorage.removeItem("token")
    this.router.navigate([""])
  }
}
