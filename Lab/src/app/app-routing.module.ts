import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ProductNoDiscountComponent } from './product-no-discount/product-no-discount.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component :HomeComponent},
  {path:'post' , component : PostComponent  },
  {path:'user' , component : UserComponent  },
  {path:'product' ,
   component : ProductsComponent,  
   children : [
      {path:'discount' , component : ProductWithDiscountComponent},
      {path: 'nodiscount' , component :ProductNoDiscountComponent }    
   ] },
   {path:'login' , component :LoginComponent },
   {path:'register' , component : RegisterComponent},
  {path:'**',component:ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
