import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/models/products';
import { Pagination } from './shared/models/pagination';
import { ShopService } from './core/services/shop-service';
import { Shop } from './features/shop/shop';
import { ShopParams } from './shared/models/shopParams';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, Header, Shop],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
 private shopService=inject(ShopService)
  title = 'skinet';
  products: Product[] = [];
  shopParams = new ShopParams();

  ngOnInit(): void {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (response) => (this.products = response.data),
      error: (error) => console.log(error),
      complete: () => console.log(''),
    });
  }
}
