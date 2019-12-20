import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductWithHistory } from 'src/app/models/ProductWithHistory';
import { TargetOperationItem } from 'src/app/models/TargetOperation';

@Component({
  selector: 'rob-target-table',
  templateUrl: './rob-target-details-table.component.html',
  styleUrls: ['./rob-target-details-table.component.sass']
})
export class RobTargetDetailsTableComponent implements OnInit, AfterViewInit, OnChanges  {
  
  ngOnChanges(changes: SimpleChanges): void {
    this.targetOperations$.subscribe(
      data =>  {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
      }
    );
  }
  
  @Input() targetOperations$:Observable<TargetOperationItem[]>;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  displayedColumns: string[] = [ 'product','balance','date'];
  dataSource = new MatTableDataSource<TargetOperationItem>();
  constructor() {
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit(): void {
    this.targetOperations$.subscribe(
      data =>  {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
    
      }
    );
  }

}
