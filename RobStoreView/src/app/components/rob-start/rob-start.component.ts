import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RobProductCreateComponent } from '../create/rob-product-create/rob-product-create.component';
import { RobTargetCreateComponent } from '../create/rob-target-create/rob-target-create.component';

@Component({
  selector: 'app-rob-start',
  templateUrl: './rob-start.component.html',
  styleUrls: ['./rob-start.component.sass']
})
export class RobStartComponent implements OnInit {

  constructor(private router:Router,
    public dialog: MatDialog) { }
  
    @ViewChild('addButton', {static : false,read: ElementRef}) private addButon: ElementRef;

  ngOnInit() {
  }

  onClick(){
    console.log(this.router.url + 'created clicked');
    if(this.router.url === '/products'){
      this.dialog.open(RobProductCreateComponent);
    }else if(this.router.url === '/targets'){
      this.dialog.open(RobTargetCreateComponent);
    }
    this.dialog.afterAllClosed.subscribe(data =>{
      this.addButon.nativeElement.blur();
    });
  }

}
