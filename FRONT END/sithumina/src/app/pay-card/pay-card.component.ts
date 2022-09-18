import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { AlertifyService } from '../service/alertify.service';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.css'],
})
export class PayCardComponent implements OnInit {
  constructor(
    public service: AppServiceService,
    public alertify: AlertifyService
  ) {}

  cartItems: Item[] = [];
  totalBill: number = 0;

  ngOnInit(): void {
    this.cartItems = this.service.getCartAddedItems();
    this.totalBill = this.service.getTotalBill();
  }

  public doPayment() {
    this.alertify.success('Payment Successful.');
  }
}
