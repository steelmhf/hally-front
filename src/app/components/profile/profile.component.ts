import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Object;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentSession();
    console.log(this.user);
  }

}
