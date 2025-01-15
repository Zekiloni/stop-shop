import {Component} from '@angular/core';
import {Ripple} from 'primeng/ripple';
import {ShopService} from '../../core/shop.service';
import {Product} from '../../core/shop.model';
import {Router} from '@angular/router';
import {getProductThumbnail} from '../../core/shop.util';
import {ButtonDirective} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-category-products',
  imports: [
    Ripple,
    ButtonDirective,
    ToastModule,
  ],
  providers: [ShopService, MessageService],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  getProductThumbnail = getProductThumbnail;

  products!: Product[];

  constructor(private shopService: ShopService, private router: Router, private messageService: MessageService) {
    this.products = this.shopService.getAllProducts();
  }

  openProduct(product: Product) {
    this.router.navigate(['product', product.id]).then();
  }

  addToCart(product: Product) {
    this.messageService.add({severity: 'success', summary: 'Uspešno', detail: 'Proizvod dodat u korpu'});
    this.shopService.addToCart(product)
  }
}
