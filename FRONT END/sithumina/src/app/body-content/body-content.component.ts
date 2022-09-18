import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model/item';
import { AppServiceService } from '../service/app-service.service';
import { FetchViewDataService } from '../service/fetch-view-data.service';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
})
export class BodyContentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: AppServiceService,
    public fetchViewDataService: FetchViewDataService
  ) {}

  allItems: Item[];
  //@Output('viewItems')
  viewItems: Item[];
  cartItems: Item[] = [];
  filteredItems: Item[] = [];
  dataType: number;
  id: number;
  type: string = '';
  totalBill: number = 0;

  ngOnInit(): void {
    this.cartItems = this.service.getCartAddedItems();
    this.fetchViewDataService.getAllItems().subscribe((data) => {
      this.allItems = data;
      this.viewItems = data;
      this.totalBill = this.service.getTotalBill();
      //this.type = this.route.snapshot.params['type'];

      //this.viewItems = Object.assign({}, this.allItems);
      //this.service.setAllItems(this.viewItems);
      console.log('BODY FOR ITEM LIST : INIT()');
    });
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
    if (branchId == 0) {
      this.fetchViewDataService.getAllItems().subscribe((data) => {
        this.viewItems = data;
      });
    } else {
      this.fetchViewDataService.getItemsByBranch(branchId).subscribe((data) => {
        this.viewItems = data;
      });
    }
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
