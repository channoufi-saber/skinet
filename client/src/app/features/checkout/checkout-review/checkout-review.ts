import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../core/services/cart-service';
import { CdkAriaLive } from '../../../../../node_modules/@angular/cdk/types/_a11y-module-chunk';
import { CurrencyPipe } from '@angular/common';
import { ConfirmationToken } from '@stripe/stripe-js';
import { AddressPipe } from '../../../shared/pipes/address-pipe';
import { PaymentCardPipe } from '../../../shared/pipes/payment-card-pipe';

@Component({
  selector: 'app-checkout-review',
  imports: [CurrencyPipe, AddressPipe, PaymentCardPipe],
  templateUrl: './checkout-review.html',
  styleUrl: './checkout-review.css',
})
export class CheckoutReview {
  cartService = inject(CartService);
  @Input() confirmationToken?: ConfirmationToken;
}
