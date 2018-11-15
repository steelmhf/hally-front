import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { EventService } from './../../services/event.service';
import { UserService } from './../../services/user.service';
import { Event } from './../../classes/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  oEvents: Array<Event>;
  gEvents: Array<Event>;

  viewEvent(event: Event){
    this.router.navigate(['/events/' +event.id]);
  }
  constructor(
    private router: Router,
    private userService: UserService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.oEvents = this.eventService.getByOwnerId(this.userService.getCurrentSession().id);
    this.gEvents = this.eventService.getByGuestId(this.userService.getCurrentSession().id);
    console.log(this.oEvents);
    console.log(this.gEvents);
  }

}
