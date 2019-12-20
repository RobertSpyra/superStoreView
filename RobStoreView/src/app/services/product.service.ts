import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, } from 'rxjs/operators';
import { GlobalConst } from 'src/app/global/GlobalConst';
import { ProductAdapter, ProductItem } from '../models/ProductItem';
import { ProductWithHistoryAdapter } from '../models/ProductWithHistory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public selectedProduct: ProductItem;
  
  private productsSource = new BehaviorSubject([]);
  currentProducts = this.productsSource.asObservable();

  private queryS = "";
  
  
  public getSelectedProduct():ProductItem{
    return this.selectedProduct;
  }
  
  public setSelectedProduct(pr:ProductItem){
    this.selectedProduct = pr;
  }

  constructor(private http :HttpClient,private adapter: ProductAdapter,
    private historyAdapter : ProductWithHistoryAdapter) {
      this.getProducts();
   }

  public getProducts(){
      return this.getProductsWithQuery(this.queryS);
  }
  
 public clearData(){
  this.queryS = "";
  return this.getProductsWithQuery(this.queryS);
 }

  public updateProduct(product: string,balanceOper: string,oper:string){
    console.log("Updating product.." + product);
    return this.http.put(GlobalConst.API_PRODUCTS,{
      name: product,
      balance: balanceOper,
      operation: oper
    });
  }

  public createProduct(product: string,balanceValue:number){
    console.log('Creating product ' + product + " " + balanceValue + " " + GlobalConst.CREATE_OPERATION)
    return this.http.post(GlobalConst.API_PRODUCTS,{
      name:product,
      balance:balanceValue,
      status:GlobalConst.CREATE_OPERATION
    });
  }

   public getProductsWithQuery(query : string){
    this.queryS = query;
    return this.http.get(GlobalConst.API_PRODUCTS).pipe(
     // Adapt each item in the raw data array
     map((data: any[]) => data.map(
       item => this.adapter.adapt(item)).
       filter(product => query.length === 0 || product.name.lastIndexOf(query, 0) === 0)),
   ).subscribe(data => this.productsSource.next(data));
  }
  
  public getProductHistory(id : string){
    let url = GlobalConst.API_PRODUCT_HISTORY.replace(":productId",id);
    return this.http.get(url).pipe(
     // Adapt each item in the raw data array
     map((data: any[]) => data.map(
       item => this.historyAdapter.adapt(item))
     ),map(data => data.sort((a,b)=>b.date.getTime()-a.date.getTime()))
     );
  }


}
