import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() productCard: any = [];
  constructor() {}

  ngOnInit(): void {}

  addToCartFun() {
    console.log(this.productCard);
  }
}
