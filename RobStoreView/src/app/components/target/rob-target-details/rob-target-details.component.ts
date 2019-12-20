import { Component, OnInit, Input } from '@angular/core';
import { TargetItem } from 'src/app/models/TargetItem';
import { TargetService } from 'src/app/services/target-service.service';
import { Observable } from 'rxjs';
import { TargetOperationItem } from 'src/app/models/TargetOperation';

@Component({
  selector: 'rob-target-details',
  templateUrl: './rob-target-details.component.html',
  styleUrls: ['./rob-target-details.component.sass']
})
export class RobTargetDetailsComponent implements OnInit {

  private target:TargetItem;
  private targetOperations$ : Observable<TargetOperationItem[]>;

  constructor(private targetService:TargetService) { 
    this.target = targetService.getSelectedTarget();
    this.targetOperations$ = targetService.getTargetOperations(this.target.name);
  }

  ngOnInit() {
  }

}
