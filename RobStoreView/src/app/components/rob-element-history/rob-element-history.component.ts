import { Component, OnInit, Input } from '@angular/core';
import { ProductWithHistory } from 'src/app/models/ProductWithHistory';

@Component({
  selector: 'rob-elem-history',
  templateUrl: './rob-element-history.component.html',
  styleUrls: ['./rob-element-history.component.sass']
})
export class RobElementHistoryComponent implements OnInit {
  
   @Input() historyElement:ProductWithHistory;

  constructor() { }

  ngOnInit() {
  }

}
