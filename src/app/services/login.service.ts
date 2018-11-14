import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: any[];

  constructor() { 
    this.users = [
      {
        "id": "1143166573",
        "fname": "james",
        "lname": "fritz",
        "username": "jfritz",
        "email": "jfritz@hallycompany.co",
        "phone": "573015648789",
        "address": "Cra 49#100-15",
        "status": 1,
        "password": "123456"
      },
      {
        "id": "1145167984",
        "fname": "louisa",
        "lname": "ackerman",
        "username": "lackerman",
        "email": "lackerman@hallycompany.co",
        "phone": "573047631705",
        "address": "Cra 46#98-77",
        "status": 1,
        "password": "123456"
      }
    ];
  }

  login(email, password){
    return this.users.find((x) => {
      return ((x.email === email) && (x.password === password));
    });
  }
}
