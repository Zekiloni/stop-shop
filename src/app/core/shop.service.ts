import {Injectable} from '@angular/core';
import {products} from './shop.data';
import {Product} from './shop.model';

@Injectable()
export class ShopService {
  public static CHECKOUT_ENDPOINT = 'https://www.paypal.me/zekiloni';
  public static TAX_FEE = 8.00;

  get cart(): Product[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) as Product[] : []; // Check for null
  }

  set cart(value: Product[]) {
    localStorage.setItem('cart', JSON.stringify(value));
  }

  getAllProducts() {
    return products;
  }

  getProductById(id: string) {
    return products.find(product => product.id === id);
  }

  addToCart(product: Product) {
    this.cart = [...this.cart, product];
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  clearCart() {
    this.cart = [];
  }

  getCartTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
