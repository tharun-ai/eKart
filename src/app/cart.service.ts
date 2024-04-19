import { Injectable } from '@angular/core';
import { Product } from './modals/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Map<number, { product: Product, quantity: number }> = new Map();
  cartCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

 public addToCart(product: Product): void {
    if (this.cart.has(product.id)) {
      this.cart.get(product.id)!.quantity++;
    } else {
      this.cart.set(product.id, { product, quantity: 1 });
    }
    this.updateCartCount();
  }

 public  getCart(): Map<number, { product: Product, quantity: number }> {
    return this.cart;
  }


  public updateCart(product: Product, quantity: number): void {
    if (this.cart.has(product.id)) {
      this.cart.get(product.id)!.quantity = quantity;
      this.updateCartCount();
    }
  }

  private updateCartCount(): void {
    let count = 0;
    let totalItems = 0;
    let totalPrice = 0;
    this.cart.forEach(item => {
      totalItems += item.quantity;
      totalPrice += item.product.price * item.quantity;
    });
    this.cartCount$.next(totalItems);
    this.totalItems$.next(totalItems);
    this.totalPrice$.next(totalPrice);
  }
}
