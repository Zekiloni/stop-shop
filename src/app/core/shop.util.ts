import {Product} from './shop.model';


export const getProductThumbnail = (product: Product): string => {
  return product.images[0];
}
