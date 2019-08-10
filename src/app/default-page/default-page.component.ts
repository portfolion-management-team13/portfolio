import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  name:any;

  getName(){
     this.service.getUser().subscribe((data: any) => this.name =data.name);
  }

  constructor(private service:UserService) { 
  
  }


  ngOnInit() {
    this.getName();
  }

}
