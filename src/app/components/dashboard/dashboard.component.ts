import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { EventService } from './../../services/event.service';
import { UserService } from './../../services/user.service';
import { Event } from './../../classes/event';
import { User } from 'src/app/classes/user';
import * as uuid from 'uuid';
export interface Select{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  

  visible: Boolean;
  name: String;
  year: String;
  month: String;
  day: String;
  hour: String;
  place: String;
  addr: String;
  user: User;
  oEvents: Array<Event>;
  gEvents: Array<Event>;

  viewEvent(event: Event){
    this.router.navigate(['/events/' +event.id]);
  }

  popUpForm(){
    this.visible = true;
  }

  createEvent(){
    console.log("Jiji");
    //let newEvent: Event;
    const newEvent = {
      "id": uuid(),
      "name": this.name,
      "date": new Date(this.month +" " +this.day +", " +this.year +" " +this.hour),
      "status": 1,
      "paymentInfo":{
        "somePaymentInfoField": "123"
      },
      "space":{
        "name": this.place,
        "address": this.addr
      },
      "owner":{
        "id": this.user.id,
        "name": this.user.fname +" " +this.user.lname,
        "contact":{
          "email": this.user.email,
          "phone": this.user.phone,
          "address": this.user.address
        }
      },
      "guestIds":[]
    };
    this.oEvents.push(newEvent);
    /*newEvent.name = this.name;
    newEvent.date = new Date(this.month +" " +this.day +", " +this.year +" " +this.hour);
    newEvent.status = 1;
    newEvent.paymentInfo.somePaymentInfoField = "123";
    newEvent.space.name = this.place;
    newEvent.space.address = this.addr;
    newEvent.owner.id = this.user.id;
    newEvent.owner.name = this.user.fname +" " +this.user.lname;
    newEvent.owner.contact.email = this.user.email;
    newEvent.owner.contact.phone = this.user.phone;
    newEvent.owner.contact.address = this.user.address;
    newEvent.guestIds = [];*/
    this.eventService.insertEvent(newEvent);
    this.visible = false;
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.name = "";
    this.year = "2018";
    this.month = "January";
    this.day = "1";
    this.hour = "18:00:00";
    this. place = "";
    this.addr = "";
    this.visible = false;
    this.oEvents = this.eventService.getByOwnerId(this.userService.getCurrentSession().id);
    this.gEvents = this.eventService.getByGuestId(this.userService.getCurrentSession().id);
    this.user = {
      id: this.userService.getCurrentSession().id,
      fname: this.userService.getCurrentSession().fname,
      lname: this.userService.getCurrentSession().lname,
      username: this.userService.getCurrentSession().username,
      email: this.userService.getCurrentSession().email,
      phone: this.userService.getCurrentSession().phone,
      address: this.userService.getCurrentSession().address,
      status: this.userService.getCurrentSession().status,
      password: this.userService.getCurrentSession().password
    };
  }

}
