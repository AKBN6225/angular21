import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncSubjectService {

  data = "11";

  myAsyncSubject = new AsyncSubject();  // THIS WILL SEND LAST VALUE, WHEN WE CALL COMPLETE METHOD ONLY

  constructor(){
    this.sendData();
  };

  sendData(){
    this.myAsyncSubject.next("22"),
    this.myAsyncSubject.next("33"),
    this.myAsyncSubject.next("44");
    this.myAsyncSubject.complete();   // untill unlsess we call this, we will get last value
  }
}
