import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../core/shop.service';
import {Product} from '../../core/shop.model';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {products} from '../../core/shop.data';

@Component({
  standalone: true,
  selector: 'app-my-cart-page',
  imports: [
    ButtonDirective,
    Ripple,
    AsyncPipe
  ],
  providers: [ShopService],
  templateUrl: './my-cart-page.component.html',
  styleUrl: './my-cart-page.component.css'
})
export class MyCartPageComponent implements OnInit {
  products$!: Observable<Product[]>;
  total: number = 0;

  constructor(private shopService: ShopService) {
    this.products$ = this.shopService.cart$;

    this.products$.subscribe((products) => console.log(products))
  }

  ngOnInit(): void {
    this.products$.subscribe((products) => {
      this.total = this.shopService.getCartTotal();
    });
  }
}
