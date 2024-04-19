import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CategorieserviceService } from '../categorieservice.service';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Product } from '../modals/product';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  searchQuery: string = '';
  searchSuggestions: string[] = [];
  public filteredProducts:Product[]=[];

  constructor(public cartService:CartService,private productService: CategorieserviceService, private router: Router) { }


  public viewCart(): void {
    this.router.navigate(['/viewcart']);
  }

  public navigateToProductDetails(suggestion: string): void {
    let product=this.filteredProducts.find(product=>product.title.toLowerCase().includes(suggestion.toLowerCase()))
    this.router.navigate(['/products', product?.id]);
    this.searchSuggestions = [];
  }

  public fetchSearchSuggestions(): void {
    if (this.searchQuery.length > 0) {
      this.productService.productsByCategory$
        .pipe(
          map((products) =>{
            this.filteredProducts=products.filter((product) => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            return this.filteredProducts;
          }),
          map((filteredProducts) =>filteredProducts.map(product => product.title)),
          tap(searchSuggestions => this.searchSuggestions = searchSuggestions)
        )
        .subscribe((res)=>{
          if (res.length === 0) {
            // No search suggestions found, redirect to product list page
            this.router.navigate(['/noitemfound']);
          }
          else{
            this.router.navigate(['/home'])
          }
        });
    } else {
      this.searchSuggestions = [];
    }
  }

}
