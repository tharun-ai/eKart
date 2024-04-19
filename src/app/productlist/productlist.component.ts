import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { CategorieserviceService } from '../categorieservice.service';
import { Product } from '../modals/product';
import { Category } from '../modals/category';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnChanges{

  @Input() selectedCategory!: Category;
  public products$: Observable<Product[]> | undefined;
  constructor(private categoryService:CategorieserviceService){}

  ngOnChanges(): void {
    if (this.selectedCategory) {
      this.products$ = this.categoryService.getProductByCategory(this.selectedCategory);
      this.products$.subscribe(
        (res)=>{
          this.categoryService.sendProducts(res);
        }
      )
    }
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
