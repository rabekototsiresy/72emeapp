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
  toniaSubscription: Subscription = new Subscription();
  listOfMp = [];
  listOfBea  = [];
  mp = {};
  numberOfMp = 0;
  numOfBea = 0;
  isTonia = false;
  listOfTonia=[];
  numOfTonia = 0;
  sampanaName: string = "";

  ngOnInit(): void {
    this.sampanaName = this.router.snapshot.params.sampana;



    if(this.sampanaName == 'tonia'){
      this.isTonia = true;
      this.toniaSubscription = this.userService.toniaSubject.subscribe(
        (response:any)=>{
          this.listOfTonia = response;
          this.numOfTonia = this.listOfTonia.length;
        },
        error=>{
          console.log(error)
        }
      )
      this.userService.getToniaFromFiv();
      this.userService.emitToniaSubject();
    
    }else{
      this.isTonia = false
    }
    this.mpAndBeaSubscription = this.userService.mpAndBeaSubject.subscribe(
      (response:any)=>{


        this.listOfMp = response.listMp
        this.listOfBea = response.listBea;
        this.numberOfMp = this.listOfMp.length
        this.numOfBea = this.listOfBea.length;


      },
      error=>{
        console.log(error)
      }
    )

    this.userService.getMpFromSampana(this.sampanaName);
    this.userService.getBeazinaFromSampana(this.sampanaName);
    
    this.userService.emitMpAndBea();

  }

}
