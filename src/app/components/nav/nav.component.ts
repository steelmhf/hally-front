import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  onLogOutClick(){
    /* aqui va la logica del logout */
    this.router.navigate(['/']);
  }

  constructor(
    private userService: UserService,
    private router: Router 
  ) { }

  ngOnInit(){
  }

}
