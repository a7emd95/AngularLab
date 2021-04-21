import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsComponent } from '../products/products.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  prodComponent: ProductsComponent = new ProductsComponent();
  categroies = this.prodComponent.CategroyList;

  constructor() { }

  ngOnInit(): void {
  }

}
