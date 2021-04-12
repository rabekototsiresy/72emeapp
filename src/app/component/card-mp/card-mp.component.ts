import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-mp',
  templateUrl: './card-mp.component.html',
  styleUrls: ['./card-mp.component.css']
})
export class CardMpComponent implements OnInit {
  @Input() mp:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
