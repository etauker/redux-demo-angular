import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, Product } from '../redux/models/shop.model';
import * as CartActions from '../redux/actions/cart.actions';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  private cart$: Observable<Product[]>;
  private currentlyInCart: any = [];
  private totalCost: number = 0;
  private totalItemCount: number = 0;

  constructor(
    private store: Store<AppState>
  ) {
    this.cart$ = this.store.select('cart');
    this.cart$.subscribe((array) => {

      this.currentlyInCart = [];
      this.totalCost = 0;
      this.totalItemCount = 0;

      array.forEach((item) => {
        this.currentlyInCart[item.id] = item.inCart;
        this.totalCost += (item.inCart * item.price);
        this.totalItemCount += item.inCart;
      })
    });
  }

  // Redux functions
  removeOne = (productId) => {
    this.store.dispatch(new CartActions.Remove(productId));
  }
  removeAll = (productId) => {
      this.store.dispatch(new CartActions.RemoveAll(productId));
  }

  // Getters
  getTotalCost = () => {
      return this.totalCost;
  }
  getTotalItemCount = () => {
      return this.totalItemCount;
  }
}
