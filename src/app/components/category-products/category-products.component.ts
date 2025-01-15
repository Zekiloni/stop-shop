import { Component } from '@angular/core';
import {Ripple} from 'primeng/ripple';
import {ShopService} from '../../core/shop.service';
import {Product} from '../../core/shop.model';
import {Router} from '@angular/router';
import {getProductThumbnail} from '../../core/shop.util';

@Component({
  standalone: true,
  selector: 'app-category-products',
  imports: [
    Ripple
  ],
  providers: [ShopService],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  getProductThumbnail = getProductThumbnail;

  products!: Product[];

  constructor(private shopService: ShopService, private router: Router) {
    this.products = this.shopService.getAllProducts();
  }

  openProduct(product: Product) {
    console.log(product)
    this.router.navigate(['product', product.id]);
  }
}
