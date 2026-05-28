import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of, from, range, interval, take, fromEvent } from 'rxjs';

@Component({
  selector: 'app-creation-operators',
  imports: [],
  templateUrl: './creation-operators.html',
  styleUrl: './creation-operators.scss',
})
export class CreationOperators implements OnInit, AfterViewInit {

  creationOperators = ['1.of', '2.from', '3.range', '4.interval', '5.fromEvent'];
  transformOperators = []
  @ViewChild('mobile') mobileValue: any;
  


  constructor(){

  };

  ngOnInit(){
    this.manualCreationOfObservables();
    this.createOperators();
  };

  ngAfterViewInit(): void {
    fromEvent(this.mobileValue.nativeElement, 'change').subscribe((data) => {
      console.log(data);
    })
  }

  manualCreationOfObservables(){
     let myObs1 = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
     });

    //  above observable is created and now we can log it

    myObs1.subscribe((data) => {
      console.log("Manual Observaable creation: ",data);
    });

    // this is the actual creation of observables, now rxjs also has provided some creation operators to create observables and 
    // like of, from, range, interval: if we want to perform through normal practice then we need to write so much logic
    // that standartd procedure and we need to use loop for range, setinterval for interval, so operators has been introduced
  }

  createOperators(){

    // of :  of can take multiple arguments or least single argument at a time
    of(7,8,9).subscribe((data) => {
      console.log("of creation operator :", data);
    });

    // from : from will only take one argumemt , inside that one argument any number of values it can contain i.e array or string which means which can be iterable

    from(['1','2',{name: 'arun', role: "dev"}, ["ABC","XYZ"],99]).subscribe((data) => {
      console.log("from creation operator :",data);
    });

    // range : the range operator in RxJS only emits numbers

    range(15,3).subscribe((data) => {
      console.log("Range creation operator :",data);
    });

    // interval : operator in RxJS only takes one argument, which is the period in milliseconds between emissions.
    // the interval operator always emits numbers only.
    // It starts at 0 and increments by 1 each time.
    // we need to use take to stop at how many intetvals , other wise it will emits continously

    interval(2000).pipe(take(5)).subscribe((data) => {
      console.log("Interval creation operator :",data);
    })



  }


}
