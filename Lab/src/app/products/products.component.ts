import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared_Classes_and_types/utlites';
import { ICategroy } from '../Shared_Classes_and_types/utlites';
import { IProduct } from '../Shared_Classes_and_types/utlites';
import { arrcat } from '../Shared_Classes_and_types/objs';
import { arrprod } from '../Shared_Classes_and_types/objs';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: Array<IProduct> ;
  CategroyList: Array<ICategroy>;
  clientName: string;
  isPurshased: boolean;



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
   width : "50%" ,
   height  : "30px" 
  }
    
  
  constructor(){
    this.discount = DiscountOffers.fifftenPrecent;
    this.storeName = "Zara";
    this.storeLogo = "/assets/logo.png";
    this.productList = arrprod;
    this.CategroyList = arrcat;
    this.clientName = " ";
    this.isPurshased = true;

  }

  makepurshe():void{

      if(this.isPurshased){
        this.isPurshased = false;
      }
      else{
        this.isPurshased = true;
      }   

  }

  checkDiscount():boolean{
     if(this.discount == DiscountOffers.NoDisscount)
     {
       return false ;
     }
     else{
       return true ;
     }
  }
  

  ngOnInit(): void {
     
    
  }

}
