// Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';

// UI Component Imports
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

// Redux Imports
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserReducer } from './redux/reducers/user.reducer';
import { CartReducer } from './redux/reducers/cart.reducer';


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
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(
        appRoutes, { useHash: true }
    ),
    StoreModule.forRoot({
      settings: UserReducer,
      cart: CartReducer
    }),
    StoreDevtoolsModule.instrument({
        maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
