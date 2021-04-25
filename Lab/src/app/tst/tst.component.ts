import { Component, OnInit } from '@angular/core';
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-tst',
  templateUrl: './tst.component.html',
  styleUrls: ['./tst.component.scss']
})
export class TstComponent implements OnInit {

  constructor(private msgService: MsgService) {
    
   }

  sendMsge()  {
    this.msgService.sendMsg("text form another component Tst ");
    console.log("Rendred in TSt")
  }

  ngOnInit(): void {
  }

}
