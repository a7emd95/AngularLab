import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private subject = new Subject<any>();
  
  constructor() { }
  sendMsg( msg : string){
     this.subject.next(msg);

  }

  observe() : Observable<any>{
  return this.subject.asObservable();
  }
}
