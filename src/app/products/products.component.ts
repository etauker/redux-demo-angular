import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, Product } from '../redux/models/shop.model';
import * as CartActions from '../redux/actions/cart.actions';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cart$: Observable<Product[]>;
  currentlyInCart: any = [];
  totalCost: number = 0;
  totalItemCount: number = 0;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.cart$ = this.store.select('cart');
    this.cart$.subscribe(cartContent => {

      this.currentlyInCart = [];
      this.totalCost = 0;
      this.totalItemCount = 0;

      cartContent.forEach((item) => {
        this.currentlyInCart[item.id] = item.inCart;
        this.totalCost += (item.inCart * item.price);
        this.totalItemCount += item.inCart;
      })
    );
  }

  // Redux functions
  addToCart = (productId) => {
      this.store.dispatch(new CartActions.Add(productId));
  }
  removeFromCart = (productId) => {
      this.store.dispatch(new CartActions.Remove(productId));
  }

  // Getters and other
  getCurrentlyInCart = (productId) => {
      return this.currentlyInCart[productId];
  }
  getTotalCost = () => {
     return this.totalCost;
  }
  getTotalItemCount = () => {
      return this.totalItemCount;
  }
  goToCheckout = () => {
      this.router.navigate(['checkout']);
  }
}
