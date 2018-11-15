import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: any;
  action: String;
  editable: Boolean;
  
  constructor(private _eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.event = this._eventService.getById(id);
    console.log(this.event);
    console.log(id);
  }

  manageForm(){
    if(this.editable){ 
      this.editable = false; 
      this.action = "Editar";
    }else{
      this.editable = true;
      this.action = "No Editar";
    }
  }
}
