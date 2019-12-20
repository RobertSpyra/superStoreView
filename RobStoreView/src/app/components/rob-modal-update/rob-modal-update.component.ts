import { Component, OnInit, Inject } from '@angular/core';
import { DialogUpdateData } from '../../models/ModalUpdateData';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { GlobalConst } from '../../global/GlobalConst';
import { TargetService } from 'src/app/services/target-service.service';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rob-modal-update',
  templateUrl: './rob-modal-update.component.html',
  styleUrls: ['./rob-modal-update.component.sass']
})
export class RobModalUpdateComponent implements OnInit {
  
   balance : number;
   minusOper :boolean;
   targetOper:string;

   targets = this.targetService.currentTargets.pipe(
     map(target => target.map(elem =>elem.name))
   );

  constructor(
    private productService :ProductService,
    public targetService :TargetService,
    public dialogRef: MatDialogRef<RobModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogUpdateData) { 
      this.minusOper = this.data.operation === GlobalConst.DEL_OPERATION;
      
    }

  ngOnInit() {
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    console.log('tesd ' + this.balance);
    this.targetService.createOperation(this.targetOper,this.data.name,this.balance).subscribe((data:any)=>
      console.log("PErformed target Oper" + data.name));
    this.productService.updateProduct(this.data.name,this.balance.toString(),
     this.data.operation).subscribe(data => {
       this.productService.getProducts();
      this.dialogRef.close();
      });
  }
  
  canSave():boolean{
    return !this.balance || (this.getValue() < 0) || this.balance < 0;
  }

  getValue():number{
    if(!this.balance){
      return this.data.initBalance;
    }
    let oper : number = 1;
    if(this.data.operation === GlobalConst.DEL_OPERATION){
      oper = -1;
    }
    return (this.balance*oper)+this.data.initBalance*1;
  }

}
