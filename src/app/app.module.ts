import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoCodeComponent,
    FooterComponent,
    HeaderComponent,
    CartFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
