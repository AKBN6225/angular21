import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimpleSubjectService {

  subjectData = [1,2,3,4];

  mySubject = new Subject();  // simple subject won't have initial value;

  constructor(){
    this.sendData();
  };

  sendData(){
    this.mySubject.next(this.subjectData);
  };


}
