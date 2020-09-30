import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {

  isHidden = true;

  promoCode = '';

  addPromoCode() {
    this.isHidden = !this.isHidden;
    console.log('Code have added!')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
