import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Početna',
    loadComponent: () => import('./pages/home-page').then(m => m.HomePageComponent)
  },
  {
    path: 'product/:id',
    title: 'Proizvod',
    loadComponent: () => import('./pages/single-product-page').then(m => m.SingleProductPageComponent)
  },
  {
    path: 'cart',
    title: 'Moja Korpa',
    loadComponent: () => import('./pages/my-cart-page').then(m => m.MyCartPageComponent)
  }
];
