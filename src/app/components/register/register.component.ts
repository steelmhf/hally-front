import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //vars:
  email: String;
  pwd: String;
  pwdConf: String;

  constructor() { }

  ngOnInit() {
    this.email = "";
    this.pwd = "";
    this.pwdConf = "";
  }

  onLoginSubmit(){
    console.log(this.email +"\t" +this.pwd +"\t" +this.pwdConf);
    /* 
      Falta hacer el register :v
    */
  }
}
