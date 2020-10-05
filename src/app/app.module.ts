import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoCodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
