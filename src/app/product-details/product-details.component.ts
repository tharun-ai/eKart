import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieserviceService } from '../categorieservice.service';
import { Product } from '../modals/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  public productId!: number;
  public product!:Product;

  constructor(private route: ActivatedRoute,private categoryService: CategorieserviceService
    ,private cartService: CartService,private router:Router
  ) { }

  ngOnInit(): void {
    this.productId =parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.fetchProductDetails();
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  public isInCart(product: Product): boolean {
   
    return this.cartService.getCart().has(product.id);
  }

  public viewCart(): void {
    this.router.navigate(['/viewcart']);
  }

  private fetchProductDetails(): void {
    this.categoryService.getProductInfo(this.productId)
      .subscribe(
        (product: Product) => {
          console.log(product);
          this.product=product;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
  }
}
