import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsComponent } from '../app/products/products.component'
import { MsgService } from './services/msg.service';
import { TstComponent } from './tst/tst.component';
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductsComponent) productsComponent : ProductsComponent;  
  @ViewChild(TstComponent) tstCopmpnent : TstComponent;

  Messge : String;
  subscription : Subscription
constructor( private msgService : MsgService){

  this.subscription = this.msgService.observe().subscribe(msg=>{
     console.log(msg)
    this.Messge = msg;
  })

}

  fireChildMethod(){
    this.productsComponent.renderValues();
  }

  fireChildMethodOneProduct(){
    this.productsComponent.renderOneValue();
  }

  // fireTstMethod(){
  //   this.tstCopmpnent.sendMsge();
  // }

  title = 'Lab';
}
