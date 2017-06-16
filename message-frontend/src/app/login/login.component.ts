import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  loginData = {
    email: '',
    password: ''
  }
  logIn() {
    this.auth.logIn(this.loginData);
  }
  ngOnInit() {
  }

}
