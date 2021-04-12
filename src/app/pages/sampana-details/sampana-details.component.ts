import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sampana-details',
  templateUrl: './sampana-details.component.html',
  styleUrls: ['./sampana-details.component.css']
})
export class SampanaDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute,private userService: UserService) { }

  mpAndBeaSubscription: Subscription = new Subscription();
  listOfMp = [];
  mp = {};
  numberOfMp = 0;

  ngOnInit(): void {
    const sampanaName = this.router.snapshot.params.sampana;
    this.mpAndBeaSubscription = this.userService.mpAndBeaSubject.subscribe(
      (response:any)=>{
        this.listOfMp = response.listMp
        this.numberOfMp = this.listOfMp.length
      },
      error=>{
        console.log(error)
      }
    )

    this.userService.getMpFromSampana(sampanaName);
    
    this.userService.emitMpAndBea();

  }

}
