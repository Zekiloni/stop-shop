import {Component} from '@angular/core';
import {CategoryProductsComponent} from '../../components/category-products';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [
    CategoryProductsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
