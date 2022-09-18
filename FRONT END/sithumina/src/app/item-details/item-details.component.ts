import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/app-service.service';
import { Item } from 'src/app/model/item';
import { FetchViewDataService } from 'src/app/service/fetch-view-data.service';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: AppServiceService,
    public fetchViewDataService: FetchViewDataService,
    public alertify: AlertifyService
  ) {}

  item: Item;
  selectItem: Item;
  itemId: number;
  cartItems: Item[] = [];
  totalBill: number = 0;

  ngOnInit(): void {
    this.cartItems = this.service.getCartAddedItems();
    this.itemId = +this.route.snapshot.params['id'];
    this.totalBill = this.service.getTotalBill();
    this.fetchViewDataService
      .getItem(this.itemId)
      .subscribe((data) => (this.item = data));
  }
  public addToCart(item: Item) {
    this.selectItem = Object.assign({}, item);
    this.cartItems.push(this.selectItem);
    //this.service.pullItemToCarts(this.selectItem);
    this.totalBill = this.totalBill + item.unit_price;
    this.service.setTotalBill(this.totalBill);
    this.alertify.success('Successfully Added.');
    //this.alertify.error('success');
  }
}
