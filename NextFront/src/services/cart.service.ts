import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.loadCartFromLocalStorage());
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  constructor() {}

  addItemsToCart(items: any[]) {
    const currentItems = this.cartItemsSubject.value;
    items.forEach(itemToAdd => {
      const existingItem = currentItems.find(
        cartItem => cartItem.productId === itemToAdd.productId && cartItem.sabor === itemToAdd.sabor
      );
      if (existingItem) {
        existingItem.quantity += itemToAdd.quantity;
      } else {
        currentItems.push(itemToAdd);
      }
    });
    this.cartItemsSubject.next(currentItems);
    this.saveCartToLocalStorage(currentItems);
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }

  removeItem(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(cartItem => cartItem !== item);
    this.cartItemsSubject.next(updatedItems);
    this.saveCartToLocalStorage(updatedItems);
  }

  private saveCartToLocalStorage(cartItems: any[]) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  private loadCartFromLocalStorage(): any[] {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  }
}
