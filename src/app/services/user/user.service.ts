import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [];
  errorMessage = "";
  errorMessageSubject = new Subject();
  usersSubject = new Subject();
  simpleUser = {};
  idToUpload = "";
  errorMessageUploadFileSubject = new Subject();
  errorMessageUploadFile="";
  mpAndBeaSubject = new Subject();
  mpAndBeaList ={
    listMp: [],
    listBea: []
  };


  simpleUserSubject = new Subject();

  constructor(private httClient: HttpClient,private router: Router,private routerParam: ActivatedRoute) { }

  emitErrorMessage(){
    this.errorMessageSubject.next(this.errorMessage)
  }

  emitUser(){
    if(Array.isArray(this.users)){
      this.usersSubject.next(this.users.slice())
    }else{
      this.usersSubject.next(this.users)
    }
  }

  emitErroMessageUploadFile(){
    this.errorMessageUploadFileSubject.next(this.errorMessageUploadFile)
  }

  emitSimpleUser(){
    this.simpleUserSubject.next(this.simpleUser)
  }

  emitMpAndBea(){
    this.mpAndBeaSubject.next(this.mpAndBeaList);

  }

  register(info: any){

    this.httClient.post("http://localhost:7000/api/v1/beazina/register",info).subscribe(
      (response:any)=>{
        console.log(response)
        this.idToUpload = response.data._id;

        this.router.navigate(['upload-avatar',response.data._id])
      },
      (error)=>{
        this.errorMessage = error.error.message;
        this.emitErrorMessage();
      }
    )
  }

  getAllUsers  = ()=>{

    const token: any = `Bearer ${localStorage.getItem('token')}`;

    this.httClient.get("http://localhost:7000/api/v1/beazina",{
      headers: {
        authorization:token
      }
    }).subscribe(
      (response: any)=>{
        this.users = response.data;
        this.emitUser()
      },
      error=>{
        console.log(error)
      }
    )

  }

  oneUser(id: any){
    const token: any = `Bearer ${localStorage.getItem('token')}`;
    this.httClient.get(`http://localhost:7000/api/v1/beazina/user/${id}`,{
      headers: {
        authorization: token
      }
    }).subscribe(
      (response: any)=>{
        this.simpleUser = response.data;
        this.emitSimpleUser()
      },
      error=>{
        console.log(error)
      }
    )
  }



  addAvatar(data: any,id: any){
    const token:any = localStorage.getItem('token');
    

    this.httClient.post('http://localhost:7000/api/v1/beazina/upload-avatar/'+id,data).subscribe(
      (response: any)=>{  
        if(token){
            
          this.router.navigate(['user',id])
        }else{
          this.router.navigate(['congratulation'])
        }
      },
      error=>{
        this.errorMessageUploadFile = error.error.message;
        this.emitErroMessageUploadFile();
      }
    )
  }


  getMpFromSampana(sampanaName: string){
    this.httClient.get("http://localhost:7000/api/v1/beazina/mp/"+sampanaName).subscribe(
      (response: any)=>{
        this.mpAndBeaList.listMp = response.data
        this.emitMpAndBea()
      }
    )

  }

  getBeazinaFromSampana(sampanaName: string){

    this.httClient.get("http://localhost:7000/api/v1/beazina/bea/"
  +sampanaName).subscribe(
      (response:any)=>{
        console.log(response)
      },
      error=>{
        console.log(error)
      }
    )

  }


  getToniaFromFiv(){

  }

  




}
