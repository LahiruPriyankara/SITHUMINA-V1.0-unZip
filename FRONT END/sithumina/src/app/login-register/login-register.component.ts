import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  constructor(public alertify: AlertifyService) {}

  ngOnInit(): void {}

  public login() {
    this.alertify.success('Successfully Login');
  }

  public register() {
    this.alertify.success('Successfully Register');
  }
}
