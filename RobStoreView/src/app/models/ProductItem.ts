import { Injectable } from '@angular/core';
import { Adapter } from '../global/interfaces/Adapter';


export class ProductItem {
    constructor(
      public name: string,
      public balance:number
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class ProductAdapter implements Adapter<ProductItem> {
  
  adapt(item: any): ProductItem {
    return new ProductItem(
      item.name,
      item.balance
    );
  }
}