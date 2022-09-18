import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CallsComponent } from '../calls/calls.component';
import { CartsComponent } from '../carts/carts.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { MapsComponent } from '../maps/maps.component';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-side-bar-icon',
  templateUrl: './side-bar-icon.component.html',
  styleUrls: ['./side-bar-icon.component.css'],
})
export class SideBarIconComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public clickOnMapCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };

    this.dialog.open(CartsComponent, dialogConfig);
  }
  public clickOnCall() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };

    /* dialogConfig.position = {
      top: '300px',
      left: '40px',
    };*/

    this.dialog.open(CallsComponent, dialogConfig);
  }
  public clickOnMsg() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };

    this.dialog.open(MessagesComponent, dialogConfig);
  }
  public clickOnMap() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };

    this.dialog.open(MapsComponent, dialogConfig);
  }
}
