import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/models/ProductItem';
import { ProductService } from 'src/app/services/product.service';
import { ProductWithHistory } from 'src/app/models/ProductWithHistory';
import { GlobalConst } from 'src/app/global/GlobalConst';
import { Observable } from 'rxjs';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-rob-elem-details',
  templateUrl: './rob-elem-details.component.html',
  styleUrls: ['./rob-elem-details.component.sass']
})
export class RobElemDetailsComponent {

  product : ProductItem;
  historyElements$ : Observable<ProductWithHistory[]>;
  addValue : string;
  minusValue: string;

  constructor(public service : ProductService) {
     this.product = service.getSelectedProduct();
     this.historyElements$ = this.service.getProductHistory(this.product.name);
     
   }

  onAddClick(): void {
    this.service.updateProduct(this.product.name,this.addValue,
     GlobalConst.ADD_OPERATION).subscribe((data:any) => {
       console.log("added " + data.balance);
       this.product.balance = data.balance;
       this.historyElements$ = this.service.getProductHistory(this.product.name);
     this.addValue = "";
      });
  }

  onRemoveClick(): void {
    this.service.updateProduct(this.product.name,this.minusValue,
     GlobalConst.DEL_OPERATION).subscribe((data:any) => {
       console.log("removed");
       this.product.balance = data.balance;
       this.historyElements$ = this.service.getProductHistory(this.product.name);
       this.minusValue = "";
      });
  }

  getValue():number{
    let value:number = this.product.balance;
  
      if(this.minusValue){
        value -= parseInt(this.minusValue);
      }
      if(this.addValue){
        value += parseInt(this.addValue);
        
      }
    return value;
  }

  getMinusEditable():boolean{
    return (!this.minusValue || this.getValue() < 0 || parseInt(this.minusValue) < 0);
  }

  getAddEditable():boolean{
    return (!this.addValue  || parseInt(this.addValue) < 0);
  }




}
