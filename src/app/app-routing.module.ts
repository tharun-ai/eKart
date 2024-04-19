import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { NoitemsfoundComponent } from './noitemsfound/noitemsfound.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout component contains the common elements
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'viewcart', component: CartViewComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      {path:'viewprofile',component:ProfileComponent},
      {path:'noitemfound',component:NoitemsfoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
