import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, Product, UserSettings } from '../redux/models/shop.model';
import * as UserActions from '../redux/actions/user.actions';
import * as CartActions from '../redux/actions/cart.actions';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  cart$: Observable<Product[]>;
  user$: Observable<UserSettings>;
  activeUser: UserSettings;
  currentlyInCart: any = [];
  totalCost = 0;
  totalItemCount = 0;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.user$ = this.store.select('settings');
    this.cart$ = this.store.select('cart');
    this.user$.subscribe(activeUser => this.activeUser = activeUser);
    this.cart$.subscribe(cartContent => {

      this.currentlyInCart = [];
      this.totalCost = 0;
      this.totalItemCount = 0;

      cartContent.forEach((item) => {
        this.currentlyInCart[item.id] = item.inCart;
        this.totalCost += (item.inCart * item.price);
        this.totalItemCount += item.inCart;
      });
    });
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
  getUserGreeting = () => {
      return this.activeUser.name
        ? `, ${this.activeUser.name}`
        : '';
  }
  changeUser = () => {

    if (this.activeUser.id === 'default_user') {
      const newUser = {
        id: 'tom_james',
        name: 'Tom James',
        language: 'de'
      };
      this.store.dispatch(new UserActions.ChangeActiveUser(newUser));
    } else {
      this.store.dispatch(new UserActions.ResetUserSettings());

    }
  }
  goToCheckout = () => {
      this.router.navigate(['checkout']);
  }
}
