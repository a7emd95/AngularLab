import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ProductsComponent } from '../products/products.component'
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   productService : ProductService  = new ProductService(); 
  //  router : Router = new Router() ;    
   activatedRouter :ActivatedRoute

  //prodComponent: ProductsComponent = new ProductsComponent(this.productService ) ;
  //categroies = this.prodComponent.CategroyList;

  constructor() { }

  ngOnInit(): void {
  }

}
