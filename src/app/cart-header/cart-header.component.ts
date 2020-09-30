import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  title = "Shopping Cart"
  countItems: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
