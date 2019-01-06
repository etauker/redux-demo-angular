import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes, Router } from '@angular/router';
// import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';


const appRoutes: Routes = [
  { path: '',           component: ProductsComponent },
  { path: 'checkout',   component: CheckoutComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { title: 'Heroes List' }
  },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
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
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
