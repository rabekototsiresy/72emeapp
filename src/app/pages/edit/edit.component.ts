import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
errorMessage: string = "";
isTonia: boolean = true;
defaultSampana: string = "lovitao"
defaultRole:string = "beazina"
userSubscription: Subscription = new Subscription();
user:any = {};
idUser: string = ""


  constructor(private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
     this.idUser = this.router.snapshot.params.id;
    this.userSubscription = this.userService.simpleUserSubject.subscribe(
      (response:any)=>{
        
        this.user = response

        this.defaultRole = this.user.role
      
      },
      err=>{
        console.log(err)
      }
    )
    this.userService.oneUser(this.idUser)
    this.userService.emitSimpleUser();

  }


  handleRole(event: any){
    this.isTonia = event.target.value == 'tonia' ?  true : false

  }

  updadteFromService(info:any){
    this.userService.updateUser(this.idUser,info.value)
  }
}
