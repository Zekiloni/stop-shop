import {Product} from './shop.model';

export const getProductThumbnail = (product: Product): string => {
  return product.images[0];
}

export const getAverageRating = (product: Product): number => {
  if (product.reviews && product.reviews.length) {
    const total = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / product.reviews.length;
  }
  return 0;
}
