import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { AppServiceService } from './service/app-service.service';
import { FetchViewDataService } from './service/fetch-view-data.service';
import { AlertifyService } from './service/alertify.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CartDataComponent } from './cart-data/cart-data.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ItemComponent } from './body-content/item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SideBarIconComponent } from './side-bar-icon/side-bar-icon.component';
import { PayCardComponent } from './pay-card/pay-card.component';
import { PaymentSuccessOrFailComponent } from './payment-success-or-fail/payment-success-or-fail.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { PopulerCategoriesComponent } from './populer-categories/populer-categories.component';
import { DelivatyComponent } from './delivaty/delivaty.component';
import { CartsComponent } from './carts/carts.component';
import { CallsComponent } from './calls/calls.component';
import { MessagesComponent } from './messages/messages.component';
import { MapsComponent } from './maps/maps.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    CartDataComponent,
    BodyContentComponent,
    ItemComponent,
    PageNotFoundComponent,
    ItemDetailsComponent,
    SideBarIconComponent,
    PayCardComponent,
    PaymentSuccessOrFailComponent,
    LoginRegisterComponent,
    SpecialOffersComponent,
    PopulerCategoriesComponent,
    DelivatyComponent,
    CartsComponent,
    CallsComponent,
    MessagesComponent,
    MapsComponent,
    OfferDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [AppServiceService, FetchViewDataService, AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
