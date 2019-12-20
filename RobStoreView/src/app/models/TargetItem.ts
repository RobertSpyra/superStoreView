import { Injectable } from '@angular/core';
import { Adapter } from '../global/interfaces/Adapter';


export class TargetItem {
    constructor(
      public name: string,
      public date: Date,
    ) { }
  }

@Injectable({
    providedIn: 'root'
})
export class TargetAdapter implements Adapter<TargetItem> {
  
  adapt(item: any): TargetItem {
    return new TargetItem(
      item.name,
      new Date(item.createdOn)
    );
  }
}