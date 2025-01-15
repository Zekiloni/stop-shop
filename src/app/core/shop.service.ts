import {Injectable} from '@angular/core';
import {products} from './shop.data';
import {BehaviorSubject} from 'rxjs';
import {Product} from './shop.model';

@Injectable()
export class ShopService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  getAllProducts() {
    return products;
  }

  getProductById(id: string) {
    return products.find(product => product.id === id);
  }


  addToCart(product: Product) {
    const currentCart = this.cartSubject.getValue();
    this.cartSubject.next([...currentCart, product]);
  }

  removeFromCart(productId: string) {
    const updatedCart = this.cartSubject.getValue().filter(product => product.id !== productId);
    this.cartSubject.next(updatedCart);
  }

  clearCart() {
    this.cartSubject.next([]);
  }

  getCartItems() {
    return this.cartSubject.getValue();
  }

  getCartTotal() {
    return this.cartSubject.getValue().reduce((total, product) => total + product.price, 0);
  }
}
