import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products;
  @Output() onRemoveProducts = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  @Output() onCheckAll = new EventEmitter();
  @Output() onClearCart =  new EventEmitter();

  checkList: any;

  removeProduct(productId:number): void {
    this.onRemoveProducts.emit(productId);
  }

  checkAll(checkList: any): void {
    this.onCheckAll.emit(this.checkList);
  }

  updateQuantity(id: number, inputQuantityProducts: HTMLInputElement): void {
    if(inputQuantityProducts.value < "0") inputQuantityProducts.value = "0";
    this.onUpdateQuantity.emit({id, quantity: parseInt(inputQuantityProducts.value)});
  }

  constructor() {
    this.checkList = {};
  }

  ngOnInit(): void {
    console.log('checkList: ', this.checkList);
    this.products.forEach(prod => {
      this.checkList[prod.id] = false;
    })
  }

}
