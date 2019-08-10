import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  noSpecial: RegExp = /^[^<>*!]+$/
  userName:string;
  userPwd:string;

  login(){
    console.log(this.userName);
    console.log(this.userPwd);
    this.ngOnInit();
    this.ref.close({
        'login':true,
        'userName':'KAMI SAMA',
        'age':22
    });
  }
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 

  }

  ngOnInit() {
  }

}
