import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
})
export class OfferDetailComponent implements OnInit {
  constructor(public alertify: AlertifyService) {}

  ngOnInit(): void {}
  public doPayment() {
    this.alertify.success('Payment Successful.');
  }
}
