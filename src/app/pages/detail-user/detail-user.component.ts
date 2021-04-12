import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user = [];
  userSubscription: Subscription = new Subscription();

  constructor(private userService: UserService,private router: ActivatedRoute) { }

  ngOnInit(): void {
      let id = this.router.snapshot.params.id;
      this.userSubscription = this.userService.usersSubject.subscribe(
        (response: any)=>{
          this.user = response;
        },
        error=>{
          console.log(error)
        }
      )

      this.userService.oneUser(id)
      this.userService.emitUser()



  }

}
