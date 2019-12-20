import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/models/ProductItem';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'rob-list',
  templateUrl: './rob-list.component.html',
  styleUrls: ['./rob-list.component.sass']
})
export class RobListComponent implements OnInit {

 products : ProductItem[];

  constructor(private productService :ProductService) {
  }
  
  ngOnInit() {
    this.productService.currentProducts.subscribe(
      message => this.products = message)
  }

}
