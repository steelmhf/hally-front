import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  found: Boolean;

  constructor(
    private router: Router,
    private _loginService: LoginService
    ) { }

  ngOnInit() {
    this.email = "";
    this.pwd = "";
    this.found = false;
  }

  onLoginSubmit(){
    console.log(this._loginService.login(this.email, this.pwd));
    this.found = this._loginService.login(this.email, this.pwd);
    if(this.found){
      console.log("Found user");
      this.router.navigate(['/dashboard'])
    }else{
      console.log("Not found");
    }
  }

}
