import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {path:'signup' , component:SignUpComponent}
  , {path:'login' , component:LoginComponent},
  {path:'cart' , component:CartComponent},
  {path:'settings',loadChildren:()=> import('./settings/settings.module').then((m)=>m.SettingsModule)},
  {path:'checkout' ,component:CheckOutComponent},
  
   {path:'home',component:HomeComponent},
   {path:'productdetails/:id' ,  canActivate:[AuthGuard] , component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
