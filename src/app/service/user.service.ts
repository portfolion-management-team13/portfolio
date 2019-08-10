import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string;

  getUser(){
    this.url = "api/api/5";
    return this.service.get(this.url);
  }

  constructor( private service:HttpClient) { }
}
