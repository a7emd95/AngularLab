import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import {catchError} from 'rxjs/operators';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _url :string = '/assets/data/post.json'
 // https://jsonplaceholder.typicode.com/posts 
  constructor( private _http : HttpClient ) { }

  getAllPosts(): Observable<IPost[]> { 
 
   return this._http.get<IPost[]>(this._url).pipe(

      catchError(
        (err)=>{ return throwError(err.message || "Not foound")
      }
      )
    )
  }
}

