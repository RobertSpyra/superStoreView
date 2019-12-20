import { Component, OnInit, Input, Testability, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ProductItem } from 'src/app/models/ProductItem';
import { MatDialog } from '@angular/material/dialog';
import { RobModalUpdateComponent } from '../rob-modal-update/rob-modal-update.component';
import { GlobalConst } from '../../global/GlobalConst';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rob-element',
  templateUrl: './rob-element.component.html',
  styleUrls: ['./rob-element.component.sass']
})
export class RobElementComponent implements OnInit {
   
 @Input() product : ProductItem;

 @ViewChild('addButton', {static : false,read: ElementRef}) private addButon: ElementRef;
 @ViewChild('delButton', {static : false,read: ElementRef}) private delButton: ElementRef;

  constructor(public dialog: MatDialog,public service : ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  onAddClick(){
   this.launchDialog(GlobalConst.ADD_OPERATION);
  }
  onDelClick(){
    this.launchDialog(GlobalConst.DEL_OPERATION);

   }

   onDetailClick(){
    this.service.setSelectedProduct(this.product);
    this.router.navigateByUrl('productDetail');
   }

  private launchDialog(oper:string){
    this.dialog.open(RobModalUpdateComponent,{
      data: {
        name : this.product.name,
        initBalance : this.product.balance,
        operation : oper
      }
    })
    this.dialog.afterAllClosed.subscribe(data =>{
      this.addButon.nativeElement.blur();
      this.delButton.nativeElement.blur();
    });
  }

}
