import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http : HttpClient  ) { }


  //_url : string = 'https://jsonplaceholder.typicode.com/users' //No such app 
 // _url : string = 'http://jsonplaceholder.typicode.com/todos';  //unkown error
 _url :string = '/assets/data/Users.json'


  getAllUser(): Observable<IUser[]> {

    return this._http.get<IUser[]>(this._url).pipe(
       catchError(
          (err) => throwError(err.message ||"Server Not Found")
       )
     )


     
  }
}



