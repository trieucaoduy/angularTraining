import { Component, OnInit } from '@angular/core';
import { Products } from './product.model';
import { PromoCodes } from './promocode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  ngOnInit() {
    this.updateCartSumary();
  }

  countItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  total: number = 0;

  promoCodes: PromoCodes[] = [
    {
      code: 'DISCOUNT',
      discountPercent: 50
    },
    {
      code: 'SALE',
      discountPercent: 20
    }
  ];

  products: Products[] = [
    {
      id: 0,
      name: "iBasso DX160 2020",
      description: "DAP iBasso DX160 2020",
      thumbail: "/assets/ibasso-dx160.jpg",
      price: 890,
      quantity: 1
    },
    {
      id: 1,
      name: "JBL T450",
      description: "Headphone overear JBL T450",
      thumbail: "/assets/jbl-t450.jpg",
      price: 475,
      quantity: 1
    }
  ]

  getProducts(): Products[] {
    return this.products;
  }

  findById(id: number): Products {
    return this.products.find(product => product.id === id);
  }

  findIndexById(id: number): number {
    return this.products.findIndex(product => product.id === id);
  }

  findCode(code: string): PromoCodes {
    return this.promoCodes.find(promocode => promocode.code === code)
  }

  updateCartSumary() {
    this.countItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.countItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.total = this.subTotal - this.discount;
  }

  removeProducts(productId: number) {
    const index = this.findIndexById(productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.updateCartSumary();
    alert (`Xoá thành công`);
  }

  updateQuantity(data: {id: number, quantity:number }) {
    const product = this.findById(data.id);

    if (product) {
      product.quantity = data.quantity || 0;
    }
    this.updateCartSumary();
  }

  applyPromoCode(codeInput: string) {
    const promoCode = this.findCode(codeInput);

    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The code was applied!`);
    }
    else {
      alert(`Sorry, this code was wrong. Please try again!`);
    }
  }

}
