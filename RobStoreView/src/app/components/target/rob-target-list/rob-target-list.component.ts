import { Component, OnInit } from '@angular/core';
import { TargetService } from 'src/app/services/target-service.service';
import { TargetItem } from 'src/app/models/TargetItem';

@Component({
  selector: 'rob-target-list',
  templateUrl: './rob-target-list.component.html',
  styleUrls: ['./rob-target-list.component.sass']
})
export class RobTargetListComponent implements OnInit {

  targets : TargetItem[];
  
  constructor(private targetService:TargetService) { }

  ngOnInit() {
    this.targetService.currentTargets.subscribe(data =>{
      console.log("initalized targets " + data.length);
      this.targets = data})
  }

}
