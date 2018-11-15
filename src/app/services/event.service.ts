import { Injectable } from '@angular/core';
import { Event } from './../classes/event';

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
        "space": {
          "name": "Hally space one",
          "address": "Cra 43#85-115"
        },
        "owner": {
          "id": "1143166573",
          "name": "James",
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
    let events = [];
    let lcs = JSON.parse(localStorage.getItem("events"));
    for (let i = 0; i < lcs.length; i++) {
      const event: Event = lcs[i];
      if(event.owner.id === id){
        event.date = new Date(event.date);
        events.push(event);
      }
    }
    return events;
  }

  getByGuestId(id){
    let events = [];
    let lcs = JSON.parse(localStorage.getItem("events"));
    for (let i = 0; i < lcs.length; i++) {
      const event: Event = lcs[i];
      for (let j = 0; j < lcs.length; j++) {
        const guest: String = lcs[i].guestIds[j];
        if (id === guest) {
          event.date = new Date(event.date);
          events.push(event);
        }
      }
    }
    return events;
  }

  insertEvent(event){
    const events = JSON.parse(localStorage.getItem("events"));
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
  }
}
