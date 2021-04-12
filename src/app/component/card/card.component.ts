import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user: any = {};
  @Input() idUser  = 0;

  imageLink="http://localhost:7000/public/uploads/images/";
  constructor() { }

  ngOnInit(): void {

    this.idUser = this.user._id
    this.imageLink +=this.user.avatar ?  this.user.avatar : 'default.png'
  }

}
