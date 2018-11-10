import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //vars:
  email: String;
  pwd: String;

  constructor() { 
  }

  ngOnInit() {
    this.email = "";
    this.pwd = "";
  }

  onLoginSubmit(){
    console.log(this.email +"\t" +this.pwd);
    /* 
      Falta hacer el login :v
    */
  }

}
