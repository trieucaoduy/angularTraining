import { Component, OnInit } from '@angular/core';
import { Products } from './product.model';
import { Promocode } from './promocode.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  ngOnInit() {
    this.updateCartSumary();
  }

  countItems: number = 0
  subTotal: number = 0
  discountPercent: number = 0
  discount: number = 0
  taxPercent: number = 10
  tax: number = 0

  promoCodes: Promocode[] = [
    {
      code: 'DISCOUNT',
      discountPercent: 50
    }
  ];

  updateCartSumary() {
    let countItems = 0;
    let subTotal = 0;

    for (const product of this.products) {
      countItems += product.quantity;
      subTotal += product.price * product.quantity;
    }

    this.countItems = countItems;
    this.subTotal = subTotal;
  }

  removeProducts(productId: string) {
    const index = this.products.findIndex(products => products.id === productId);
    if (index != -1) {
      this.products.splice(index, 1);
    }

    this.updateCartSumary();
  }

  updateQuantity(data: {id: string, value: number}) {
    const product = this.products.find(products => products.id === data.id);
    if(product) {
      product.quantity = data.value || 0;
    }

    this.updateCartSumary();
  }

  applyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );

    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    }
    else {
      alert(`Sorry, the promotion code you entered is not valid! Try code "DISCOUNT"`)
    }
  }

  products: Products[] = [
    {
      id: "0",
      name: "iBasso DX160 2020",
      description: "DAP iBasso DX160 2020",
      thumbail: "/assets/ibasso-dx160.jpg",
      price: 890,
      quantity: 1
    },
    {
      id: "1",
      name: "JBL T450",
      description: "Headphone overear JBL T450",
      thumbail: "/assets/jbl-t450.jpg",
      price: 475,
      quantity: 1
    }
  ]
}
