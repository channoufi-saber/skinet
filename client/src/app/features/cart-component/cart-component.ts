import { Component, inject } from '@angular/core';

import { CartService } from './../../core/services/cart-service';
import { CartItemComponent } from '../cart/cart-item/cart-item';
import { OrderSummaryComponent } from '../../shared/components/order-summary-component/order-summary-component';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
@Component({
  selector: 'app-cart-component',
  imports: [CartItemComponent, OrderSummaryComponent, EmptyState],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {
  cartService = inject(CartService);
}
