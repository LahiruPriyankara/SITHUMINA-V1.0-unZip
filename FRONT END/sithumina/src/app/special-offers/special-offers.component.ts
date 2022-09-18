import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/app-service.service';
import { Item } from 'src/app/model/item';
import { FetchViewDataService } from 'src/app/service/fetch-view-data.service';
import { OfferDetailComponent } from '../offer-detail/offer-detail.component';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css'],
})
export class SpecialOffersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: AppServiceService,
    public fetchViewDataService: FetchViewDataService,
    public dialog: MatDialog
  ) {}

  allItems: Item[];
  //@Output('viewItems')
  viewItems: Item[];
  cartItems: Item[] = [];
  filteredItems: Item[] = [];
  dataType: number;
  id: number;
  totalBill: number = 0;

  ngOnInit(): void {
    this.cartItems = this.service.getCartAddedItems();
    this.totalBill = this.service.getTotalBill();
    this.fetchViewDataService.getAllItems().subscribe((data) => {
      this.allItems = data;
      this.viewItems = data;
    });
  }

  public offerDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };
    this.dialog.open(OfferDetailComponent, dialogConfig);
  }

  public getAllItems() {
    console.log('BODY FOR ITEM LIST : getAllItems()');
    this.fetchViewDataService.getAllItems().subscribe((data) => {
      this.viewItems = data;
    });
  }

  public getItemByCatId(catId: number) {
    console.log('BODY FOR ITEM LIST : getItemByCatId(), catId = ' + catId);

    this.fetchViewDataService.getItemsByCategory(catId).subscribe((data) => {
      this.viewItems = data;
    });

    /*this.allItems.forEach((item) => {
      if (item.category_id == catId) {
        this.filteredItems.push(item);
      }
    });
    this.viewItems = this.filteredItems;
    this.filteredItems = [];*/
  }

  public getItemByBrandId(brandId: number) {
    console.log(
      'BODY FOR ITEM LIST : getItemBybrandId(), brandId = ' + brandId
    );
    this.fetchViewDataService.getItemsByBrand(brandId).subscribe((data) => {
      this.viewItems = data;
    });
  }

  public getItemByBranchId(branchId: number) {
    console.log(
      'BODY FOR ITEM LIST : getItemBybranchId(), branchId = ' + branchId
    );
    this.fetchViewDataService.getItemsByBranch(branchId).subscribe((data) => {
      this.viewItems = data;
    });
  }

  public itemAddToCart(selectedItem: Item) {
    console.log(
      'BODY FOR ITEM LIST : itemAddToCart(), selectedItem = ' +
        selectedItem.branch_id
    );
    this.cartItems.push(selectedItem);
    //this.service.pullItemToCarts(selectedItem);
    this.totalBill = this.totalBill + selectedItem.unit_price;
    this.service.setTotalBill(this.totalBill);
  }

  public itemBySearchKey(key: string) {
    console.log(
      'BODY FOR ITEM LIST : itemAddToCart(), itemBySearchKey = ' + key
    );
    console.log('dad  ' + key.length);
    if (key.length > 0) {
      this.allItems.forEach((item) => {
        console.log(
          item.item_name + ' - ' + key + ' - ' + item.item_name.includes(key)
        );
        if (item.item_name.toUpperCase().includes(key.toUpperCase())) {
          this.filteredItems.push(item);
        }
      });

      this.viewItems = this.filteredItems;
      this.filteredItems = [];
    } else {
      this.viewItems = this.allItems;
    }
  }
}
