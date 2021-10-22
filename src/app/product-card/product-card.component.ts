import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() productCard: any = [];
  @Output() sendproductCard = new EventEmitter();

  testViewChild: string = "I'm the child";

  constructor() {}

  ngOnInit(): void {}

  addToCartFun() {
    //console.log(this.productCard);
    this.sendproductCard.emit(this.productCard); // emit fun sends data to the parent
  }
}
