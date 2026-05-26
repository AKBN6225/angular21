import { Component, OnInit } from '@angular/core';
import { SimpleSubjectService } from '../../services/simple-subject';

@Component({
  selector: 'app-simple-subject',
  imports: [],
  templateUrl: './simple-subject.html',
  styleUrl: './simple-subject.scss',
})
export class SimpleSubject implements OnInit {


  constructor(private SimpleSubjectInstance: SimpleSubjectService){

  };

  ngOnInit() {
    console.log("inisde the ngOnInit");
    this.SimpleSubjectInstance.mySubject.subscribe((data) => {
      console.log("inisde the subject subscribe");
      console.log(data);
    });

    // By the time subject emiied the value we have not subscribed the subject so that's the reason we are not getting data 
    // Now again we need to trigger the subject to send the data
    this.SimpleSubjectInstance.sendData();
    // now the logs on line number 20 & 21 get printed because the .subscribe is still active untill we subscribe

    this.addDataToSubject();
  };

  addDataToSubject(){
    this.SimpleSubjectInstance.subjectData.push(5);
    this.SimpleSubjectInstance.sendData();
  }
}
