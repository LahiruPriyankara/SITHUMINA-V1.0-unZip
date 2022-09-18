import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(public alertify: AlertifyService) {}

  ngOnInit(): void {}

  public sendIdea() {
    this.alertify.success('Successfully Sent');
  }
}
