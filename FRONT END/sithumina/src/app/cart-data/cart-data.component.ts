import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { AlertifyService } from '../service/alertify.service';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css'],
})
export class CartDataComponent implements OnInit {
  constructor(
    public service: AppServiceService,
    public alertify: AlertifyService
  ) {}

  @Input()
  allCartItems: Item[] = [];
  @Input()
  totalBill: number;

  ngOnInit(): void {}

  count: number = 0;
  removeItemFromCart(removingTtem: Item) {
    this.allCartItems.forEach((item) => {
      if (item.item_id == removingTtem.item_id) {
        console.log('this.count ' + this.service.getTotalBill());

        this.service.setTotalBill(
          this.service.getTotalBill() - removingTtem.unit_price
        );
        this.totalBill = this.totalBill - removingTtem.unit_price;

        console.log('this.count ' + this.service.getTotalBill());
        this.allCartItems.splice(this.count, 1);
        //this.service.removeItemToCarts(this.count);
      }
      this.count++;
    });
    this.count = 0;
    this.alertify.success('Successfully Removed');
  }
}
