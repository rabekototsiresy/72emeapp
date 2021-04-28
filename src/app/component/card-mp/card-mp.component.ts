import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import jwt_decode from 'jwt-decode';
import env from 'src/app/common/config'

@Component({
  selector: 'app-card-mp',
  templateUrl: './card-mp.component.html',
  styleUrls: ['./card-mp.component.css']
})
export class CardMpComponent implements OnInit {
  @Input() mp:any = {};
  @Input() sampana: string = "";
  id_user: any = "";
  imageLink=env.HOST_URL_API+"/public/uploads/images/";
  isNotBeazina: boolean = true

  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imageLink += this.mp.avatar ? this.mp.avatar : "default.png"
    this.id_user = this.mp._id;
    const token:any = localStorage.getItem('token')
    const userConnected:any = jwt_decode(token)

    this.isNotBeazina = userConnected.role !== "beazina" ? true : false



  }

  


  removeUserFromService(id:string){
    this.userService.removeUser(id,this.sampana)
    
  }
  


  



}
