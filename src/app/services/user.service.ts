import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isSessionOpen(){
    return (localStorage.getItem("user")) ? true : false;
  }

  getById(id){
    return {};
  }
}
