import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalConst } from '../global/GlobalConst';
import { map, tap } from 'rxjs/operators';
import { TargetAdapter, TargetItem } from '../models/TargetItem';
import { TargetOperationAdapter } from '../models/TargetOperation';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  constructor(private http:HttpClient,private adapter:TargetAdapter,
    private targetOperationAdapter:TargetOperationAdapter) { 
    this.getTargets();
  }
  private targetSelected : TargetItem;

  private queryS = "";

  private targetsSource = new BehaviorSubject<TargetItem[]>([]);
  currentTargets = this.targetsSource.asObservable();

  
  public getTargets(){
    return this.getTargetsQuery(this.queryS);
  }

  public setSelectedTarget(targetSelected : TargetItem){
    this.targetSelected = targetSelected;
  }

  public getSelectedTarget():TargetItem{
    return this.targetSelected;
  }

  public getTargetsQuery(query : string){
    this.queryS = query;
    return this.http.get(GlobalConst.API_TARGETS).pipe(
     tap((data: any[])=>console.log(data.length)),
     // Adapt each item in the raw data array
     map((data: any[]) => data.map(
       item => this.adapter.adapt(item)).
       filter(product => query.length === 0 || product.name.lastIndexOf(query, 0) === 0)),
   ).subscribe(data => this.targetsSource.next(data));
  }

  public createOperation(target:string,product:string,balance:number){
    console.log('Creating target oper ' + target + ' ' + product + ' ' + balance)
    return this.http.post(GlobalConst.API_TARGETS_OPERATION.replace(":targetId",target),{
      'name':target,
      'productName':product,
      'balance':balance
    });
  }

  public createTarget(target:string){
    console.log('Creating target  ' + target)
    return this.http.post(GlobalConst.API_TARGETS,{
      'name':target
    });
  }

  public getTargetOperations(id : string){
    console.log("get target operations " + id);
    let url = GlobalConst.API_TARGETS_OPERATION.replace(":targetId",id);
    return this.http.get(url).pipe(
     // Adapt each item in the raw data array
     map((data: any[]) => data.map(
       item => this.targetOperationAdapter.adapt(item))
     ),map(data => data.sort((a,b)=>b.date.getTime()-a.date.getTime()))
     );
  }
}
