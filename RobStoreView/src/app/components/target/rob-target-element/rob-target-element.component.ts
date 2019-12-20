import { Component, OnInit, Input } from '@angular/core';
import { TargetItem } from 'src/app/models/TargetItem';
import { Router } from '@angular/router';
import { TargetService } from 'src/app/services/target-service.service';


@Component({
  selector: 'rob-target-element',
  templateUrl: './rob-target-element.component.html',
  styleUrls: ['./rob-target-element.component.sass']
})
export class RobTargetElementComponent implements OnInit {

  @Input() target : TargetItem;
  
  constructor(private router: Router,private targetService:TargetService) { }

  ngOnInit() {
  }
  
  onDetailClick(){
    this.targetService.setSelectedTarget(this.target);
    this.router.navigateByUrl('targets/targetId');
  }

}
