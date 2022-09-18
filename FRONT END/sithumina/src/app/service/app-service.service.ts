import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(public http: HttpClient) {}

  private allItems: Item[] = [];
  private cartAddedItems: Item[] = [];
  private totalBill: number = 0;

  public getAllItems(): Item[] {
    return Object.assign([], this.allItems);
  }
  public setAllItems(itemsArry: Item[]) {
    this.allItems = Object.assign([], itemsArry);
  }
  public getCartAddedItems(): Item[] {
    return this.cartAddedItems; //Object.assign([], this.cartAddedItems);
  }
  public setCartAddedItems(itemsArry: Item[]) {
    this.cartAddedItems = itemsArry; //Object.assign([], itemsArry);
  }
  public getTotalBill(): number {
    return this.totalBill; //Object.assign(this.totalBill);
  }
  public setTotalBill(price: number) {
    this.totalBill = price; //Object.assign(price);
  }

  public pullItemToCarts(item: Item) {
    this.cartAddedItems.push(item);
    console.log(
      'pullItemToCarts - this.cartAddedItems.length : ' +
        this.cartAddedItems.length
    );
  }
  public removeItemToCarts(place: number) {
    this.cartAddedItems.splice(place, 1);
    console.log(
      'removeItemToCarts - this.cartAddedItems.length : ' +
        this.cartAddedItems.length
    );
  }
}
