import { Injectable } from '@angular/core';
import { Adapter } from '../global/interfaces/Adapter';


export class TargetOperationItem {
    constructor(
      public name: string,
      public date: Date,
      public product:string,
      public balance:number
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class TargetOperationAdapter implements Adapter<TargetOperationItem> {
  
  adapt(item: any): TargetOperationItem {
    return new TargetOperationItem(
      item.name,
      new Date(item.createdOn),
      item.product,
      item.balance
    );
  }
}