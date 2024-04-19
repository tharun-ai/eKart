import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './modals/category';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './modals/product';

@Injectable({
  providedIn: 'root'
})
export class CategorieserviceService {

  private productsByCategorySubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public productsByCategory$: Observable<Product[]> = this.productsByCategorySubject.asObservable();
  constructor(private httpClient:HttpClient) { }


  public getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>('https://fakestoreapi.com/products/categories')
  }

  public getProductByCategory(selectedCategory:Category):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products/category/${selectedCategory}`)
  }

  getProductInfo(productId: number): Observable<Product> {
    const url = `https://fakestoreapi.com/products/${productId}`;
    return this.httpClient.get<Product>(url);
  }

  public sendProducts(products:Product[]){
    this.productsByCategorySubject.next(products);
  }
}
