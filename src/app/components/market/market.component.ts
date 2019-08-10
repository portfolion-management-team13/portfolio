import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {


  items:object;
  currentIndex:number;



  constructor() {
    this.initItem();

   }

  ngOnInit() {
  }

  initItem(){

    this.items = [{
      'name':'aaa',
      'content':'bbb',
      'status':false
    },{
      'name':'ccc',
      'content':'ddd',
      'status':false
    },

  ]
  }



}
