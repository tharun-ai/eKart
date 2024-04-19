import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { FormsModule } from '@angular/forms';
import { NoitemsfoundComponent } from './noitemsfound/noitemsfound.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductlistComponent,
    ProductComponent,
    ProductDetailsComponent,
    LayoutComponent,
    CartViewComponent,
    NoitemsfoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
