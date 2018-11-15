import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isSessionOpen: boolean;

  onLogOutClick(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router 
  ) { }

  ngOnInit(){
  }

}
