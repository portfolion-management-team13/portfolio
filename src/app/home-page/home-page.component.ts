import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from '@angular/router';
import {DynamicDialogRef , DynamicDialogConfig , DialogService} from 'primeng/api';
import {LoginComponent} from '../components/login/login.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers:[DialogService],
  encapsulation:ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  items: MenuItem[];
  item2s:MenuItem[];
  loginItems:MenuItem[];
  login:boolean;
  user:object;
  constructor(private router:Router , public dialogService: DialogService) { }

  Login(){

    //this.router.navigate(['login']);
    const ref = this.dialogService.open(LoginComponent,{
      header:'Login',
      width:'20%'
    });

    ref.onClose.subscribe((data:any)=>{
      if(data != null && data.hasOwnProperty('login')){
      this.user = data;
      this.login = data.login;
      }
    })


    this.router.navigate(['home']);

  }

  Exit(){
/*
         connect to back office 

         codes here
*/

    this.user = null;
    this.login = false;
  }

  ngOnInit() {
    // initial items of navigator
    this.items = [
      {
        label:'Fund Management',
        command: ()=>this.toFundManagement()
 
      },

      {
        label:'Update Price',
        command:()=>this.toUpdatePrice()
 
      },

      {
        label:'Security Type',
        command:()=>this.toSecurity()

      },

      {
        label:'Transfor Requests',
        command:()=>this.toTransfor()
      }
    ];


    this.item2s = [
      {
        label:'Fund List',
        command: ()=>this.toFund()
 
      },

      {
        label:'New Fund',
        command:()=>this.toCreateFund()
 
      }
    ];

// initial items of login or sign etc. options
    this.loginItems = [
      {
        label:'Login'
      },

      {
        label:'Sign'
      }
    ];

  // initial login status
  this.login = false;



  }

  toFundManagement(){
    this.router.navigate(['home/FundManagement']);
  }

  toUpdatePrice(){
    this.router.navigate(['home/UpdatePrice']);
  }

  toSecurity(){
    this.router.navigate(['home/Security']);
  }

  toTransfor(){
    this.router.navigate(['home/Transfor']);
  }

  toFund(){
    this.router.navigate(['home/Fund']);
  }

  toCreateFund(){
    this.router.navigate(['home/CreateFund']);
  }



}
