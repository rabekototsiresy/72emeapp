import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessageSubscription = new Subscription();
  errorMessage = "";
  defaultRole ="tonia";
  defaultSampana = "lovitao";
  isTonia = false;
  titlePage = "Hanokatra kaonty"
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    document.title = this.titlePage;
      
  }

  handleRole(event: any){
    this.isTonia = event.target.value == 'tonia' ?  false : true

  }

  registerFromService(info: NgForm){
    this.userService.register(info.value)
    if(!info.value.sampana){
      info.value.sampana = "loviao|mpiajoria|mpamakilay|mpiandalana"
    }
    this.errorMessageSubscription = this.userService.errorMessageSubject.subscribe(
      (response: any)=>{
        this.errorMessage = response
      }
    )
  }



}
