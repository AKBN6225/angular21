import { Component, OnInit } from '@angular/core';
import { BehaviouralSubjectService } from '../../services/behavioural-subject';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavioural-subject',
  imports: [],
  templateUrl: './behavioural-subject.html',
  styleUrl: './behavioural-subject.scss',
})
export class BehaviouralSubject implements OnInit {

  constructor(
    private BehaviouralSubjectServiceInstance: BehaviouralSubjectService
  ) {

  };

  ngOnInit() {
    this.BehaviouralSubjectServiceInstance.myBehaviourSubject.subscribe((data) => {
      console.log("Initial BEHAVIOUR Subject in component: ", data);
    });

    // here in this component and as well as in header component we are getting data even after behaviour subject emits , because it sends last value irresoective of when you subscribe
    // try by keeping settimeout also you will get the data as above

    // IF YOU RUN BELOW CODE ALSO YOU WILL GET THE DATA 

    // setTimeout(() => {
    //   this.BehaviouralSubjectServiceInstance.myBehaviourSubject.subscribe((data) => {
    //     console.log("Initial BEHAVIOUR Subject in component with settimeout: ", data);
    //   });
    // }, 5000);

    this.addDataToBehaviourSubject();
    this.testSubjectsEagerOrNot();
  };

  addDataToBehaviourSubject(){
    this.BehaviouralSubjectServiceInstance.sendData("New Beviour subject data we are passing");
  };

  testSubjectsEagerOrNot(){
    
    let mySub = new BehaviorSubject("100");
    mySub.next("hello my subjects: Eager");
    console.log(mySub);  

    // the above log is printing an object , by this time we are not subscribed the behavioursubject so which means subjects are eager
  }


}
