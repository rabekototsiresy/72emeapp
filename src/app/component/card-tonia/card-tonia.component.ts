import { Component, OnInit ,Input} from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user/user.service';
import jwt_decode from 'jwt-decode';
import env from 'src/app/common/config'
@Component({
  selector: 'app-card-tonia',
  templateUrl: './card-tonia.component.html',
  styleUrls: ['./card-tonia.component.css']
})
export class CardToniaComponent implements OnInit {

  @Input() tonia:any = {};
  @Input() sampana: string = "";
  imageLink= env.HOST_URL_FRONT+"/public/uploads/images/";
  id_user = "";
  isNotBeazina: boolean = true;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.imageLink += this.tonia.avatar ? this.tonia.avatar : "default.png"
    this.id_user = this.tonia._id


    const token:any = localStorage.getItem('token');
    const userConnected:any = jwt_decode(token);
    this.isNotBeazina = userConnected.role !== "beazina" ? true : false
  }

  removeToniaFromService(id:string){
    this.userService.removeUser(id,this.sampana);
  }

}
