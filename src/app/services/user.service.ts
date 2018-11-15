import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isSessionOpen(){
    return true;
  }

  getById(id){
    return {};
  }
}
