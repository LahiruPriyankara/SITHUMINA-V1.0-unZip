import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../model/item';
import { Category } from '../model/category';
import { Brand } from '../model/brand';
import { Branch } from '../model/branch';

@Injectable({
  providedIn: 'root',
})
export class FetchViewDataService {
  constructor(public http: HttpClient) {}
  //readonly rootURL = '../../data/items.json';

  //i_list: Item[];
  /*
  public getItemss(): Item[] {
    console.log('getItems in service');
    this.http
      .get(this.rootURL)
      .toPromise()
      .then((res) => {
        this.i_list = res as Item[];
        console.log('items list' + this.i_list);
      });

    return this.i_list;

    // this.url = "http://localhost:8080/shopAdminService/webresources/shopDataManage/getCategories";
    //this.url = "http://localhost:3000/secondServer/api";
    //return this.http.get<Category[]>(this.url);
    /*
          this.url = "http://localhost:8080/shopAdminService/webresources/shopDataManage/getCategories";
          return this.http.get<Category[]>(this.url).pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error.message || 'server error');
            })

          );//
  }*/

  /*public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.rootURL);
  }*/

  readonly rootURL = 'http://localhost:8761/sithumina-api';
  //c_formData: Category;
  //c_list: Category[];
  //b_formData: Brand;
  //b_list: Brand[];
  //i_formData: Item;
  i_category: Category[];
  i_brand: Brand[];
  i_branch: Branch[];
  i_list: Item[];

  public getAllCategories(): Observable<Category[]> {
    console.log('AppServiceService.getAllCategories');
    return this.http.get<Category[]>(
      this.rootURL + '/sithumina-fetch-data/getCategories'
    );
  }
  public getAllBrands(): Observable<Brand[]> {
    console.log('AppServiceService.getAllBrands');
    return this.http.get<Brand[]>(
      this.rootURL + '/sithumina-fetch-data/getBrands'
    );
  }
  public getAllBranches(): Observable<Branch[]> {
    console.log('AppServiceService.getAllBranches');
    return this.http.get<Branch[]>(
      this.rootURL + '/sithumina-fetch-data/getBranches'
    );
  }

  public getAllItems(): Observable<Item[]> {
    console.log('AppServiceService.getAllItems');
    return this.http.get<Item[]>(
      this.rootURL + '/sithumina-fetch-data/getItems'
    );
  }

  public getItemsByCategory(id: number): Observable<Item[]> {
    console.log('AppServiceService.getItemsByCategory');
    return this.http.get<Item[]>(
      this.rootURL + '/sithumina-fetch-data/getItemsByCategory/' + id
    );
  }

  public getItemsByBrand(id: number): Observable<Item[]> {
    console.log('AppServiceService.getItemsByBrand');
    return this.http.get<Item[]>(
      this.rootURL + '/sithumina-fetch-data/getItemsByBrand/' + id
    );
  }
  public getItemsByBranch(id: number): Observable<Item[]> {
    console.log('AppServiceService.getItemsByBranch');
    return this.http.get<Item[]>(
      this.rootURL + '/sithumina-fetch-data/getItemsByBranch/' + id
    );
  }
  public getItem(id: number): Observable<Item> {
    console.log('AppServiceService.getItem');
    return this.http.get<Item>(
      this.rootURL + '/sithumina-fetch-data/getItem/' + id
    );
  }

  /*public addCategory(category:Category): Observable<Category[]> {
    return this.http.post<Category[]>(this.rootURL+"/addCategory",category);
  }
  public updateCategory(category:Category): Observable<Category[]> {
    return this.http.post<Category[]>(this.rootURL+"/updateCategory",category);
  }

  public deleteCategory(category:Category): Observable<Category[]> {
    return this.http.post<Category[]>(this.rootURL+"/deleteCategory",category);
  }
*/
  /*deleteCategory(cat: Category) {
    return this.http.post(this.rootURL + '/daleteCategory', cat);
  }
*/
}
