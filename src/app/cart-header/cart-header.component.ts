import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  title = "Shopping Cart"
  @Input() countItems: number;

  constructor() { }

  ngOnInit(): void {
  }

}
