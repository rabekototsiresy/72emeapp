import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userSerive: UserService) { }

  users = [];
  usersSubscription = new Subscription();

  ngOnInit(): void {
      this.usersSubscription = this.userSerive.usersSubject.subscribe(
        (response: any)=>{
          this.users = response;

    

        },
        error=>{
          console.log(error)
        }
      )
      this.userSerive.getAllUsers()
      this.userSerive.emitUser()
  }

}
