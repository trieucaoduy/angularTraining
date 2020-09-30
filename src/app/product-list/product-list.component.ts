import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products
  @Output() onRemoveProducts = new EventEmitter()
  @Output() onUpdateQuantity = new EventEmitter()

  removeProduct(productId:string): void {
    this.onRemoveProducts.emit(productId)
  }

  updateQuantity(data): void {
    console.log(data.value);
    console.log(data.id);
    this.onUpdateQuantity.emit(data.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
