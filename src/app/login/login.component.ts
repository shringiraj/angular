import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = new User();
  btnStatus = false;
  constructor(private titleService: Title,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Login");

  }

  submit() {
    //this.btnStatus = true;
    console.log(this.userModel)
    this.userService.login(this.userModel).subscribe(res => {
      this.btnStatus = false;
      console.log(res)
    });
  }
}
