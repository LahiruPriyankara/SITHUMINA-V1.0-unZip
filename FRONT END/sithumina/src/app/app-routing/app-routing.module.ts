import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BodyContentComponent } from '../body-content/body-content.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { PayCardComponent } from '../pay-card/pay-card.component';
import { PaymentSuccessOrFailComponent } from '../payment-success-or-fail/payment-success-or-fail.component';
import { SpecialOffersComponent } from '../special-offers/special-offers.component';
import { PopulerCategoriesComponent } from '../populer-categories/populer-categories.component';
import { delay } from 'rxjs/operators';
import { DelivatyComponent } from '../delivaty/delivaty.component';

const routes: Routes = [
  {
    path: '',
    /*component: StudentsListComponent*/ redirectTo: 'home',
    /*pathMatch:'prefix'*/ pathMatch: 'full',
  },
  { path: 'home', component: BodyContentComponent },
  //{ path: 'home/:type', component: ItemDetailsComponent },
  { path: 'item-detail/:id', component: ItemDetailsComponent },
  { path: 'pay-card', component: PayCardComponent },
  { path: 'do-transaction', component: PaymentSuccessOrFailComponent },
  { path: 'speial-offers', component: SpecialOffersComponent },
  { path: 'populer-categories', component: PopulerCategoriesComponent },
  { path: 'home-delivary', component: DelivatyComponent },
  { path: 'logout', component: BodyContentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
