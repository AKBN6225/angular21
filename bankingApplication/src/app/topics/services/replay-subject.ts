import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReplaySubjectService {

  data = "";
  myReplaySubject = new ReplaySubject();
  // myReplaySubject = new ReplaySubject(5);   // if using this line it will pass only last 5 values
  // myReplaySubject = new ReplaySubject(3 , 1000);   // if using this line it will pass only last 3 values and if we use settimeout in component more the 1 sec we won't get values as well



  // Replay subject can take two arguments 1) no.of previous items and 2) buffer time
  // if we don't give those two arguments it will give all values 

  constructor(){
    this.sendData();
  };

  sendData(){
    this.myReplaySubject.next("1");
    this.myReplaySubject.next("2");
    this.myReplaySubject.next("3");
    this.myReplaySubject.next("4");
    this.myReplaySubject.next("5");
    this.myReplaySubject.next("6");
  }

}
