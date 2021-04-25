import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService ) { }

  userList : IUser[] = [] ;
  errMsg : string ;
  ngOnInit(): void 
  {
    this.userService.getAllUser().subscribe(
      (data) => {
             this.userList = data ;
      } ,
      (err) => {

        this.errMsg = err ;
      }
    )
  }

}
