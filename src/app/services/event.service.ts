import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { 
    localStorage.setItem("events", JSON.stringify([
      {
      "id": "QA2DJF12S",
      "name": "Halloween 31 de octubre",
      "date": "2018-11-11T01:08:43.511Z",
      "status": 1,
      "paymentInfo": {
        "somePaymentInfoField": "123"
      },
      "spaceId": "Z43KZJS5L",
      "owner": {
        "id": "1143166573",
        "name": "james",
        "contact": {
          "email": "jfritz@hallycompany.co",
          "phone": "573015648789",
          "address": "Cra 49#100-15"
        }
      },
      "guestIds": [
        "1145167984"
      ]
      }
    ]));
  }

  getAll(){
    return JSON.parse(localStorage.getItem("events"));
  }
  
  getById(id){
    return JSON.parse(localStorage.getItem("events")).find(x => x.id === id);
  }

  getByOwnerId(id){
    return JSON.parse(localStorage.getItem("events")).find(x => x.owner.id === id);
  }

  getByGuestId(id){
    return JSON.parse(localStorage.getItem("events")).find((x) => {
      return (x.guestIds.find(y => y === id)) ? true : false;
    });
  }

  insertEvent(event){
    const events = JSON.parse(localStorage.getItem("events"));
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
  }
}
