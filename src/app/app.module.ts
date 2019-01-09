import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes, Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SimpleReducer } from './simple.reducer';
import { PostReducer } from './post.reducer';
import { CartReducer } from './reducers/cart.reducer';


const appRoutes: Routes = [
  { path: '',           component: ProductsComponent },
  { path: 'checkout',   component: CheckoutComponent },
  { path: '**', component: ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forRoot(
        appRoutes,
        {
            enableTracing: true,
            useHash: true
        } // <-- debugging purposes only
    ),
    StoreModule.forRoot({
        post: PostReducer,
        message: SimpleReducer,
        cart: CartReducer
        // stock: StockReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
