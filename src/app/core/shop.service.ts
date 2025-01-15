import {Injectable} from '@angular/core';
import {products} from './shop.data';

@Injectable()
export class ShopService {


  getAllProducts() {
    return products;
  }

  getProductById(id: string) {
    return products.find(product => product.id === id);
  }
}
