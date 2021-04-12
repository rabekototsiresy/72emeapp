import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-card-full',
  templateUrl: './card-full.component.html',
  styleUrls: ['./card-full.component.css']
})
export class CardFullComponent implements OnInit {

  @Input() user: any = {
    fullName: '',
    role: '',
    username: ''
  };
  userSubscription: Subscription = new Subscription();
  roleActive = "";
  idUser = "";
  imageLink="http://localhost:7000/public/uploads/images/";
  trueImageLink = "";
  constructor(private userService: UserService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    const token: any = localStorage.getItem('token');
    const userActive: any = jwt_decode(token);
    this.roleActive = userActive.role;
 
    let id = this.router.snapshot.params.id;
    this.idUser = id
   
    this.userSubscription = this.userService.simpleUserSubject.subscribe(
      (response: any)=>{
        this.user = response;
        let inc = 0;
        if(this.user.avatar){
          this.trueImageLink = "http://localhost:7000/public/uploads/images/"+this.user.avatar
        }else{
          this.trueImageLink = "http://localhost:7000/public/uploads/images/default.png"
        }
      },
      error=>{
        console.log("error",error)
      }
    )

    this.userService.oneUser(id)
    this.userService.emitSimpleUser()



    
  

}

}