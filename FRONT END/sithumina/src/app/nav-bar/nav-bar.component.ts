import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { Branch } from '../model/branch';
import { AlertifyService } from '../service/alertify.service';
import { AppServiceService } from '../service/app-service.service';
import { FetchViewDataService } from '../service/fetch-view-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public service: AppServiceService,
    public fetchViewDataService: FetchViewDataService,
    public alertify: AlertifyService
  ) {}

  branches: Branch[];

  ngOnInit(): void {
    this.fetchViewDataService
      .getAllBranches()
      .subscribe((data) => (this.branches = data));
  }
  openLoginReg() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };

    /* dialogConfig.position = {
      top: '300px',
      left: '40px',
    };
    dialogConfig.position = {
      top: '300px',
      left: '40px',
    };*/

    this.dialog.open(LoginRegisterComponent, dialogConfig);
  }

  public logOut() {
    this.alertify.success('Successfully LogOut.');
  }
  public pageNotFound() {
    this.alertify.error('System Error.Please Try again later.');
  }
}
