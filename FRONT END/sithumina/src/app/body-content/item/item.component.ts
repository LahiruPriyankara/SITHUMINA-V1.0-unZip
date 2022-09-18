import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(public alertify: AlertifyService) {}

  @Input('item') item: Item;
  //@Input() hideIcons: boolean;
  @Output() itemAddToCart: EventEmitter<Item> = new EventEmitter();

  hideIcons: boolean = true;

  ngOnInit(): void {}

  selectItem: Item;

  public addToCart(item: Item) {
    this.selectItem = Object.assign({}, item);
    this.itemAddToCart.emit(this.selectItem);
    this.alertify.success('Successfully Added');
    //this.alertify.error('success');
  }
}
