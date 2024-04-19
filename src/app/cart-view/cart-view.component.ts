import { Component } from '@angular/core';
import { Product } from '../modals/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.scss'
})
export class CartViewComponent {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const cart = this.cartService.getCart();
    this.cartItems = Array.from(cart.values());
    
  }

  increaseQuantity(item: { product: Product, quantity: number }): void {
    item.quantity++;
    this.cartService.updateCart(item.product, item.quantity);
  }

  decreaseQuantity(item: { product: Product, quantity: number }): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCart(item.product, item.quantity);
    }
  }
}
