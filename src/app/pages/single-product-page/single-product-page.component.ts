import {Component} from '@angular/core';
import {ShopService} from '../../core/shop.service';
import {Product} from '../../core/shop.model';
import {ActivatedRoute} from '@angular/router';
import {Ripple} from 'primeng/ripple';
import {ButtonDirective} from 'primeng/button';
import {ChipsModule} from 'primeng/chips';
import {InputNumberModule} from 'primeng/inputnumber';
import {TabViewModule} from 'primeng/tabview';
import {getAverageRating, getProductThumbnail} from '../../core/shop.util';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ChipModule} from 'primeng/chip';
import {DatePipe} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-single-product-page',
  imports: [
    Ripple,
    ButtonDirective,
    ChipsModule,
    InputNumberModule,
    TabViewModule,
    RatingModule,
    FormsModule,
    ToastModule,
    ChipModule,
    DatePipe,
  ],
  providers: [ShopService, MessageService],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent {
  protected readonly getProductThumbnail = getProductThumbnail;

  product!: Product;
  averageRating: number = 0;

  constructor(private shopService: ShopService, private route: ActivatedRoute, private messageService: MessageService) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.product = this.shopService.getProductById(id)!;
      this.averageRating = getAverageRating(this.product);
    });
  }

  addToCart(product: Product) {
    this.messageService.add({severity: 'success', summary: 'Uspešno', detail: 'Dodałi ste proizvod u korpu'});
    this.shopService.addToCart(product)
  }
}
