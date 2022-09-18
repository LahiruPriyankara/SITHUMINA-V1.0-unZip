import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from '../model/branch';
import { Brand } from '../model/brand';
import { Category } from '../model/category';
import { Item } from '../model/item';
import { AppServiceService } from '../service/app-service.service';
import { FetchViewDataService } from '../service/fetch-view-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(
    public router: Router,
    public service: AppServiceService,
    public fetchViewDataService: FetchViewDataService
  ) {}

  @Output() allItemsEmit: EventEmitter<any> = new EventEmitter();
  @Output() itemByCatEmit: EventEmitter<number> = new EventEmitter();
  @Output() itemByBrandEmit: EventEmitter<number> = new EventEmitter();
  @Output() itemByBranchEmit: EventEmitter<number> = new EventEmitter();
  @Output() itemBySearchKeyEmit: EventEmitter<string> = new EventEmitter();

  categories: Category[];
  brands: Brand[];
  branches: Branch[];

  ngOnInit(): void {
    this.fetchViewDataService
      .getAllCategories()
      .subscribe((data) => (this.categories = data));

    this.fetchViewDataService
      .getAllBrands()
      .subscribe((data) => (this.brands = data));

    this.fetchViewDataService
      .getAllBranches()
      .subscribe((data) => (this.branches = data));
  }
  isShown: boolean = false; // hidden by default

  toggleShow() {
    this.isShown = !this.isShown;
  }

  allItems() {
    console.log('SIDE BAR (ALL ITEM)');
    this.allItemsEmit.emit();
    //this.router.navigate(['/home']);
  }
  clickOnCategory(category: Category) {
    console.log('SIDE BAR (ITEM BY CATEGORY ID) : ' + category.category_id);
    this.itemByCatEmit.emit(category.category_id);
    //this.itemByCatEmit.emit(4);
    this.router.navigate(['/home']);
  }

  clickOnBrand(brand: Brand) {
    console.log('SIDE BAR (ITEM BY BRAND ID) : ' + brand.brand_id);
    this.itemByBrandEmit.emit(brand.brand_id);
    this.router.navigate(['/home']);
  }

  clickOnBranch(branch: string) {
    console.log('SIDE BAR (ITEM BY BRAND ID) : ' + branch);
    //console.log('SIDE BAR (ITEM BY BRAND ID) : ' + branch.split('-', 1));
    this.itemByBranchEmit.emit(+branch.split(' ', 1));
  }

  //values: string;
  searchItem(event: any) {
    //this.values = event.target.value;
    this.itemBySearchKeyEmit.emit(event.target.value);
  }
}
