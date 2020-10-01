import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {

  promoCode: string;

  @Output() onApplyPromoCode = new EventEmitter();

  applyPromoCode(codeInput: HTMLInputElement) {

    this.onApplyPromoCode.emit(codeInput.value);
    // const code = this.promoCode;

    // if (code) {
    //   this.onApplyPromoCode.emit(code);
    // }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
