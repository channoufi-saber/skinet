import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { Shop } from './features/shop/shop';
import { ProductDetailsComponent } from './features/shop/product-details-component/product-details-component';
import { TestErrorComponent } from './features/test-error-component/test-error-component';
import { CartComponent } from './features/cart-component/cart-component';
import { CheckoutComponent } from './features/checkout-component/checkout-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: Shop },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
