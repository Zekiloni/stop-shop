import {Component} from '@angular/core';
import {ShopService} from '../../core/shop.service';
import {Product} from '../../core/shop.model';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {RouterLink} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-my-cart-page',
  imports: [
    ButtonDirective,
    Ripple,
    RouterLink,
    ToastModule,
  ],
  providers: [ShopService, MessageService],
  templateUrl: './my-cart-page.component.html',
  styleUrl: './my-cart-page.component.css'
})
export class MyCartPageComponent {
  products!: Product[];
  total: number = 0;
  fee: number = 0;

  constructor(private shopService: ShopService, private messageService: MessageService) {
    this.products = shopService.cart;
    this.total = shopService.getCartTotal();
    this.fee = ShopService.TAX_FEE;
  }

  removeFromCart(product: Product) {
    this.shopService.removeFromCart(product.id);
    this.messageService.add({severity: 'success', summary: 'Uspešno', detail: 'Proizvod uklonjen iz korpe'});
    this.products = this.shopService.cart;
    this.total = this.shopService.getCartTotal();
  }

  checkout() {
    window.location.href = ShopService.CHECKOUT_ENDPOINT;
  }

  clearCart() {
    this.shopService.clearCart();
    this.total = 0;
    this.products = []
  }
}
