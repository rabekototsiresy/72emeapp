import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import jwt_decode from "jwt-decode";
import env from "src/app/common/config"

@Component({
  selector: 'app-card-bea',
  templateUrl: './card-bea.component.html',
  styleUrls: ['./card-bea.component.css']
})
export class CardBeaComponent implements OnInit {

  @Input() bea:any = {};
  @Input() sampana: string = "";
  imageLink= `${env.HOST_URL_FRONT}/public/uploads/images/`;
  user_id="";
  usersConnected:any = {};
  isNotBeazina: boolean = true;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.imageLink += this.bea.avatar ? this.bea.avatar : "default.png"
    this.user_id = this.bea._id

    const token:any = localStorage.getItem('token');
    const userConnected:any = jwt_decode(token);
    this.isNotBeazina = userConnected.role !== "beazina" ? true : false
  }

  removeBeazinaFromService(id:string){
    this.userService.removeUser(id,this.sampana)
  }

}
