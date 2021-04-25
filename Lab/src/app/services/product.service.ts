import { Injectable } from '@angular/core';
import { arrprod, arrprodParent } from '../Shared_Classes_and_types/objs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts() {
    return arrprodParent;
  }


  getProductByID(id: number) {
    console.log(id)
    if (typeof (id) != 'number') {
      return null;
    }
    var prod;

    for (let index = 0; index < arrprod.length; index++) {
      if (arrprod[index].id == id) {
        prod = arrprod[index];
      }
    }

    // for (var item of arrprodParent) {
    //   if (item.id == id) {
    //     prod = item;
    //   } else {
    //     prod =  null;
    //   }
    console.log(prod)
    return prod;
  }
}

