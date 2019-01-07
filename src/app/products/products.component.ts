import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  title = 'Redux Shop';
  cart = [];
  stock = [
  {
      id: 'item_1',
      name: 'Item 1',
      description: 'Item 1',
      price: 20
  },
  {
      id: 'item_2',
      name: 'Item 2',
      description: 'Item 2',
      price: 2
  },
  {
      id: 'item_3',
      name: 'Item 3',
      description: 'Item 3',
      price: 8
  }];

  addToCart = (id) => {
     let product = this.stock.find(item => item.id === id);

     if (this.cart.some(item => item.id === id)) {
         this.cart = this.cart.map(item => {
            if (item.id === id) {
                item.quantity++;
            }
            return item;
         });
     }
     else {
         this.cart.push({
             id: id,
             quantity: 1,
             price: product.price,
             name: product.name,
             description: product.description
         });
     }
  }
  removeFromCart = (id) => {
     if (this.cart.some(item => item.id === id)) {
         this.cart = this.cart.map(item => {
            if (item.id === id) {
                item.quantity--;
            }
            if (item.quantity > 0) {
                return item;
            }
         })
         .filter(item => item);
     }
  }
  getCurrentlyInCart = (id) => {
      let matches = this.cart.filter(item => item.id === id);
      return matches.length === 0
        ? 0
        : matches[0].quantity
  }
  getTotalCost = () => {
      return this.cart.reduce((total, item) => {
          return total + (item.price * item.quantity);
      }, 0);
  }
  getTotalItemCount = () => {
      return this.cart.reduce((count, item) => {
          return count + item.quantity;
      }, 0);
  }
  goToCheckout = () => {
      this.router.navigate(['checkout']);
  }
}
