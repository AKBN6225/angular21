import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviouralSubjectService {

  data = "Hello Behaviour subject";

  myBehaviourSubject = new BehaviorSubject(this.data); // Behaviour subject has initial value as we apssing in the parenthesis

  constructor(){
    // this.sendData();
  };

  sendData(value: string){
    this.myBehaviourSubject.next(value);
  }
}
