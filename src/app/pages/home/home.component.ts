import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userSerive: UserService) { }

  users = [];
  listOfTonia = [];
  nbT = 0;
  listOfMpiandraikitra = [];
  nbMp = 0
  listOfBeazina = [];
  nbBea = 0 
  usersSubscription = new Subscription();

  ngOnInit(): void {
      this.usersSubscription = this.userSerive.usersSubject.subscribe(
        (response: any)=>{
          this.users = response;

          this.listOfTonia = response.filter((data:any)=>data.role=="tonia");
          this.nbT = this.listOfTonia.length;
          this.listOfMpiandraikitra = response.filter((data:any)=>data.role=="mpiandraikitra");
          this.nbMp = this.listOfMpiandraikitra.length;
          this.listOfBeazina= response.filter((data:any)=>data.role=="beazina");
          this.nbBea = this.listOfBeazina.length;

        },
        error=>{
          console.log(error)
        }
      )
      this.userSerive.getAllUsers()
      this.userSerive.emitUser()
  }


}
