import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { Shop } from './features/shop/shop';
import { ProductDetailsComponent } from './features/shop/product-details-component/product-details-component';
import { TestErrorComponent } from './features/test-error-component/test-error-component';
import { CartComponent } from './features/cart-component/cart-component';
import { CheckoutComponent } from './features/checkout-component/checkout-component';
import { Login } from './features/account/login/login';
import { Register } from './features/account/register/register';
import { authGuard } from './core/guards/auth-guard';
import { emptyCartGuard } from './core/guards/empty-cart-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: Shop },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard, emptyCartGuard] },
  { path: 'account/login', component: Login },
  { path: 'account/register', component: Register },
  { path: 'shop/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
