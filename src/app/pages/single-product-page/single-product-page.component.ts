import {Component} from '@angular/core';
import {ShopService} from '../../core/shop.service';
import {Product, Review} from '../../core/shop.model';
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
import {InputTextareaModule} from 'primeng/inputtextarea';

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
    InputTextareaModule,
  ],
  providers: [ShopService, MessageService],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent {
  protected readonly getProductThumbnail = getProductThumbnail;

  newReview: Review = {
    username: '',
    comment: '',
    rating: 0,
    date: new Date(),
  }

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

  submitRating() {
    this.newReview.date = new Date();
    console.log(this.newReview.rating)
    const review = {...this.newReview};
    this.product.reviews?.push(review);

    this.averageRating = getAverageRating(this.product);
    this.newReview.username = '';
    this.newReview.comment = '';
    this.newReview.rating = 0;
  }
}
