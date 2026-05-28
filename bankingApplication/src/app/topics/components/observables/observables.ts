import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom  } from 'rxjs';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-observables',
  imports: [RouterOutlet],
  templateUrl: './observables.html',
  styleUrl: './observables.scss',
})
export class Observables implements OnInit {
  observablesConcepts = ["1.observable definition","2.promises are eager & observables are lazy", "3.creating observable with subscribing & unsubscribing","4.diff btw observable and subject"];
  subjectsConcepts = ["1.Subject", "2.BehaviouralSubject", "3.ReplaySubject", "4.AsyncSubject"];
  rxjsOperators = ["1.creationOperators", "2.transformOperators"];


  constructor(private path: Router) {

  };

  ngOnInit() {
    this.observableDefinition1();
    this.checkingEager2();
    this.creatingObservableSubcribingUnsubscribing3();
    this.diffBtwObservableAndSubject4();
  };

  observableDefinition1(){
    // an observable is an object that represents a stream of asynchronus values.
    // it does not hold one eventual result like promise, instead it can emit multiple values over time and you can react to each emission by subscribing
  };

  checkingEager2() {
    let mypromise = new Promise((resolve, reject) => {
      console.log("promise is eager");
    });

    let myObservable = new Observable((observer) => {
      console.log("observable is lazy");
    });
    // here the promise log is printed , which means the inner code is executed even if we are not consuming
    // the observable log is not printed untill unless we subscribe which means the below code

    myObservable.subscribe((data) => {
      console.log(data);
    })
    // now here the log is created which means when we subscribe only the constructor function of observable get's executed
  };

  async creatingObservableSubcribingUnsubscribing3() {

    let myObservable = new Observable((observer) => {
      let count = 0;

      const intervalId = setInterval(() => {
        if(count < 5){
          count++;
          observer.next(count);
        }else{
          // observer.error("limit reached");  // either or complete can be called once
          observer.complete();
          clearInterval(intervalId);
        }
      },1000)

    });

    myObservable.subscribe((data) => {
      console.log(data);
    },(err) => {
      console.log(err);
    }, () => {
      console.log("execution completed");
    });

    /*
    unsubscribe we can not directly do on observabe , we need to assign observable to a reference and through reference we need to do un subscribe
    */

    const result = await lastValueFrom(myObservable);

    // await is only for promises, so the above line is converting observable to promise with pre defined method lastValueFrom

    let obsRef = myObservable.subscribe((data) => {
      console.log("second time calling",data);
      if(data == 3){
        obsRef.unsubscribe();
      }
    },(err) => {
      console.log(err);
    }, () => {
      console.log("execution completed");
    });

    // Below is new syntax in object and keywords

    // myObservable.subscribe({next :(data) => {
    //   console.log(data);
    // },error:(err) => {
    //   console.log(err);
    // }, complete: () => {
    //   console.log("execution completed");
    // }});

    // once error is called we can not call and print complete ; 
  };

  diffBtwObservableAndSubject4(){
    // Observable → values are produced inside the constructor function you pass when creating it. The producer logic runs only when someone subscribes, and then it emits values to that subscriber.
    // Subject → you don’t define a producer function. Instead, you manually push values into it using .next(), and it immediately emits those values to all active subscribers.

    // observables are unicast : which means we can consume in same component
    // subjects are multicast : which means we can consume and we can create manually and we can send data to other components

    // wrt signals
    // signals can pass data for sync operations and with one dynamic value
    // subjects can handle bith sync and async operations and can pass multiple values

    // signals can no handle like switchmap, debounce and continous stream of api data like that

  };

  naviagteToRes(val: any){
    let actualVal = val.split(".")[1];
    this.path.navigate([`/observables/${actualVal}`]);
  }


}
