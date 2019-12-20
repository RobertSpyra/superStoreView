import { Component, OnInit, Input, AfterViewInit, OnChanges, ViewChild } from '@angular/core';
import { ProductWithHistory } from 'src/app/models/ProductWithHistory';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {SimpleChanges}  from "@angular/core";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
@Component({
  selector: 'rob-table',
  templateUrl: './rob-table.component.html',
  styleUrls: ['./rob-table.component.sass']
})
export class RobTableComponent implements OnInit, AfterViewInit, OnChanges  {
  
  ngOnChanges(changes: SimpleChanges): void {
    this.historyProducts.subscribe(
      data =>  {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
      }
    );
  }
  
  
  @Input() historyProducts:Observable<ProductWithHistory[]>;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  displayedColumns: string[] = [ 'balance','balanceOperation','date'];
  dataSource = new MatTableDataSource<ProductWithHistory>();
  constructor() {
   
    }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit(): void {
    this.historyProducts.subscribe(
      data =>  {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
    
      }
    );
  }

}
