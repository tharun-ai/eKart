import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../modals/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product!: Product;
  constructor(private router: Router) {}
  public viewProduct(product:Product){
    this.router.navigate(['/products', product.id]);
  }
}
