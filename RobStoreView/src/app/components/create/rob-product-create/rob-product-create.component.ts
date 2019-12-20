import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogUpdateData } from 'src/app/models/ModalUpdateData';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rob-product-create',
  templateUrl: './rob-product-create.component.html',
  styleUrls: ['./rob-product-create.component.sass']
})
export class RobProductCreateComponent implements OnInit {


  createProductForm: FormGroup;
  warning: string;

  constructor(private productService: ProductService, public fb: FormBuilder, public dialogRef: MatDialogRef<RobProductCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogUpdateData) {
  }

  ngOnInit() {

    this.createProductForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(2)]],
      balance: ['0', [Validators.required, Validators.min(0)]],
      alarmValue: ['', [Validators.min(0)]]
    });

    // this.createProductForm = new FormGroup({
    //   productName : new FormControl('',Validators.required),
    //   balance :  new FormControl(0,[Validators.required, Validators.min(0)])
    // });
  }

  onSubmit() {
    this.productService.createProduct(this.createProductForm.get('productName').value,
      this.createProductForm.get('balance').value).
      subscribe(
        data => {
          this.productService.getProducts();
          this.dialogRef.close();
        },
        err => {
          if (err.error.name && err.error.name === 'Name Unique') {
            this.warning = 'Produkt ' + this.createProductForm.get('productName').value + ' już istnieje';
          }

        }
      );
  }

  onCancel() {
    console.log('test' + this.createProductForm.get('balance').valid);
    this.dialogRef.close();
  }

  onKeyUp() {
    this.warning = null;
  }

}
