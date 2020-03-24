import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  btnStatus: boolean = false;
  constructor(private titleService: Title,
    private userService: UserService,
    private router: Router) { }
  userModel = new User();
  ngOnInit() {
    this.titleService.setTitle("Registration");
  }
  submit(formData) {
    console.log(this.userModel)
    this.btnStatus = true;
    this.userService.registration(this.userModel).subscribe(res => {
      if (res) {
        console.log(res);
        this.router.navigate(['login']);
      } else {

      }

    })


  }
}
