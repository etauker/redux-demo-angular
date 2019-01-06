import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cart = [{
      id: 'item_1',
      name: 'Item',
      description: '',
      price: 4,
      quantity: 7
  },
  {
      id: 'item_2',
      name: 'Another Item',
      description: '',
      price: 3,
      quantity: 12
  }];

  removeOne = (id) => {
     if (this.cart.some(item => item.id === id)) {
         this.cart = this.cart.map(item => {
            if (item.id === id) {
                item.quantity--;
            }
            if (item.quantity > 0) {
                return item;
            }
         })
         .filter(item => item && item.quantity > 0);
     }
  }
  removeAll = (id) => {
     if (this.cart.some(item => item.id === id)) {
         this.cart = this.cart.map(item => {
            if (item.id !== id) {
                return item;
            }
         })
         .filter(item => item);
     }
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
}
