import { Component, OnInit } from '@angular/core';
import { Products } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  countItem: number;

  products: Products[] = [
    {
      id: "0",
      name: "iBasso DX160 2020",
      description: "DAP iBasso DX160 2020",
      thumbail: "/assets/ibasso-dx160.jpg",
      price: 890,
      quantity: 2
    },
    {
      id: "1",
      name: "JBL T450",
      description: "Headphone overear JBL T450",
      thumbail: "/assets/jbl-t450.jpg",
      price: 475,
      quantity: 5
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
