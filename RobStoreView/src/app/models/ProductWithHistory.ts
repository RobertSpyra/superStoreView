import { Injectable } from '@angular/core';
import { Adapter } from '../global/interfaces/Adapter';


export class ProductWithHistory {
    constructor(
      public name:  string,
      public balance: number,
      public balanceOper: number,
      public operation : string,
      public date: Date,
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class ProductWithHistoryAdapter implements Adapter<ProductWithHistory> {
  
  adapt(item: any): ProductWithHistory {
    return new ProductWithHistory(
      item.productName,
      item.balance,
      item.balanceOper,
      item.operation,
      new Date(item.createdOn)
    );
  }
}