import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../core/shop.service';
import {Product} from '../../core/shop.model';
import {ActivatedRoute} from '@angular/router';
import {JsonPipe} from '@angular/common';
import {Ripple} from 'primeng/ripple';
import {ButtonDirective} from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-single-product-page',
  imports: [
    JsonPipe,
    Ripple,
    ButtonDirective
  ],
  providers: [ShopService],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent{
  product!: Product;

  constructor(private shopService: ShopService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.product = this.shopService.getProductById(id)!;
    });
  }

  addToCart(product: Product) {
    return this.shopService.addToCart(product)
  }

}
