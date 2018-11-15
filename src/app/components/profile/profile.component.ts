import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User
  password: String;
  action: String;
  editable: Boolean;
  email;
  phone;
  addr;
  pwd;
  pwdConf;

  manageForm(){
    if(this.editable){ 
      this.editable = false; 
      this.action = "Editar";
    }else{
      this.editable = true;
      this.action = "No Editar";
    }
  }

  changeInfo(){
    this.user.email = this.email;
    this.user.phone = this.email; 
    this.user.address = this.addr; 
    this.user.password = this.email; 
    this.password = "";
    for (let i = 0; i < this.pwd.length; i++) {
      this.password += "";
    }
    this.editable = false; 
    this.action = "Editar";
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.editable = false;
    this.action = "Editar";
    this.password = "";

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

    for (let i = 0; i < this.user.password.length; i++) {
      this.password += "*";
      
    }
    console.log(this.user.fname +" " +this.user.lname);
  }

}
