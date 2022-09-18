import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-payment-success-or-fail',
  templateUrl: './payment-success-or-fail.component.html',
  styleUrls: ['./payment-success-or-fail.component.css'],
})
export class PaymentSuccessOrFailComponent implements OnInit {
  constructor(public service: AppServiceService) {}

  cartItems: Item[] = [];
  totalBill: number = 0;
  ngOnInit(): void {
    this.cartItems = this.service.getCartAddedItems();
    this.totalBill = this.service.getTotalBill();
  }

  public clearCart() {
    console.log('Clear Cart.');
    this.service.setCartAddedItems([]);
    this.service.setTotalBill(0);
  }
}
