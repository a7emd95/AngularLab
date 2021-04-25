import { Component, OnInit, Output } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes_and_types/utlites';
import { ICategroy } from '../Shared_Classes_and_types/utlites';
import { IProduct } from '../Shared_Classes_and_types/utlites';
import { arrcat } from '../Shared_Classes_and_types/objs';
import { arrprod } from '../Shared_Classes_and_types/objs';
import { p1 } from '../Shared_Classes_and_types/objs';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';







@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: Array<IProduct>;
  CategroyList: Array<ICategroy>;
  clientName: string;
  isPurshased: boolean;
  product: IProduct;



  // constructor(dis: DiscountOffers, name: string //not allowed 
  //   , logo: string, pList: Array<IProduct>, icat: Array<ICategroy>,
  //   client: string, isP: boolean) {
  //     this.discount = dis;
  //     this.storeName = name;
  //     this.storeLogo = logo;
  //     this.productList = pList;
  //     this.CategroyList = icat;
  //     this.clientName = client;
  //     this.isPurshased = isP;

  // }



  styleCol = {
    width: "50%",
    height: "30px"
  }



  constructor(private productService: ProductService , private router : Router , private activatedRoure : ActivatedRoute) {
    this.discount = DiscountOffers.fifftenPrecent;
    this.storeName = "Zara";
    this.storeLogo = "/assets/logo.png";
    this.productList = arrprod;
    this.CategroyList = arrcat;
    this.clientName = " ";
    this.isPurshased = false;
    // this.product = p1;

  }

  makepurshe(): void {

    if (this.isPurshased) {
      this.isPurshased = false;
    }
    else {
      this.isPurshased = true;
    }

  }

  checkDiscount(): boolean {
    if (this.discount == DiscountOffers.NoDisscount) {
      return false;
    }
    else {
      return true;
    }
  }


  renderValues() {
    var products = this.productService.getAllProducts();
    if (products != null) {

      this.productList = products;
    }
    console.log("Rendred")

  }

  renderOneValue() {
    var product = this.productService.getProductByID(2);
    if (product != null) {

      this.product = product;
    }
    console.log(this.product.name)

  }


  goToDiscount(){

   this.router.navigate( ['discount'] , {relativeTo:this.activatedRoure});
  }

  goToNoDiscount(){

    this.router.navigate(['nodiscount'] , {relativeTo: this.activatedRoure});
  }

  ngOnInit(): void {


  }

}
