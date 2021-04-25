import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TstComponent } from './tst/tst.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductNoDiscountComponent } from './product-no-discount/product-no-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    TstComponent,
    HomeComponent,
    UserComponent,
    PostComponent,
    ErrorPageComponent,
    ProductWithDiscountComponent,
    ProductNoDiscountComponent,
    LoginComponent,
    RegisterComponent,
    NoteComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
