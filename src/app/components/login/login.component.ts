import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //vars:
  email: String;
  pwd: String;

  constructor(private _loginService: LoginService) { 
  }

  ngOnInit() {
    this.email = "";
    this.pwd = "";
  }

  onLoginSubmit(){
    console.log(this._loginService.login(this.email, this.pwd));
  }

}
