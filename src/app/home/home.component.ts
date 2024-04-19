import { Component, OnInit } from '@angular/core';
import { CategorieserviceService } from '../categorieservice.service';
import { Category } from '../modals/category';
import { tap } from 'rxjs';
import { Product } from '../modals/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public categories!:Category[]
  public products!:Product[];
  public  selectedCategory='electronics' as unknown as Category;
  constructor(private categoriesService:CategorieserviceService){
   
  }
  
  ngOnInit(): void {
    this.categoriesService.getCategories().pipe(
      tap((res)=>{
        this.categories=res;
      })
    ).subscribe();
  }
  
  public categorySelected(selectedCategory:Category){
    console.log(selectedCategory);
    this.selectedCategory=JSON.parse(JSON.stringify(selectedCategory));
    console.log(this.selectedCategory);
  }
  
}
