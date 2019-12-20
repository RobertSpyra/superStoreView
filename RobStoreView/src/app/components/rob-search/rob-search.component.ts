import { Component, OnInit, Input} from '@angular/core';
import { Subject  } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { map,debounceTime,switchMap } from 'rxjs/operators';
import { TargetService } from 'src/app/services/target-service.service';


@Component({
  selector: 'rob-search',
  templateUrl: './rob-search.component.html',
  styleUrls: ['./rob-search.component.sass']
})
export class RobSearchComponent implements OnInit {
    
  public keyUp = new Subject<string>();
  @Input() modeSearch:string;
  public value :string;

  constructor(private search: ProductService,private targetSearch : TargetService){ 
    search.getProductsWithQuery("");  
        
  }
  ngOnInit() {
    this.keyUp.pipe(
      debounceTime(250) 
      ).subscribe(data => {
       this.runAction(data);
     });  
  }

  runAction(data){
    switch(this.modeSearch){
      case 'P':
          this.search.getProductsWithQuery(data);
        break;
      case 'T':
          this.targetSearch.getTargetsQuery(data);
        break; 
    }
  }


}
