import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform-operators',
  imports: [],
  templateUrl: './transform-operators.html',
  styleUrl: './transform-operators.scss',
})
export class TransformOperators implements OnInit {

  transOprs = ['1.map', '2.filter', '3.reduce'];


  constructor() {

  };

  ngOnInit() {
    this.diffBtwPromisesAndObservables();
    this.transformOperators();
  };


  diffBtwPromisesAndObservables() {
    // promise:  are like one time activity of processing data and sending sync or async.
    // ex: oerdering food on zomato. we will order they will deliver simple, no extension

    // observables: they continiusly emits the data untill it's completed or we unsubscrie
    // ex: we subscrbe a news paper we will daily get the papaer it's like obseravbles . we need to unsubscribe
  };



  transformOperators() {

    // map, filter , reduce : These are similar to js map, filter, reduce
    // The diff is js operators can only work on static values I mean arrays , objects which we have data at instant i.e sync data
    // rxjs operators can work async & sync data i.e obseravbles which emits data continously also

    // delay: Postpone each emission by a fixed amount of time.
    // of('A', 'B', 'C').pipe(
    //   delay(2000) // delay each emission by 2s
    // ).subscribe(val => console.log(val));

    // debounce: Wait for a “quiet period” before emitting.
    // Think of it as: “Only emit after the user stops typing for X ms.”
    // fromEvent(input, 'input').pipe(
    //   debounceTime(500), // wait 500ms after typing stops
    //   map((event: any) => event.target.value)
    // ).subscribe(val => console.log('Search:', val));

    // switchMap: it cancels the previous request and creates a new request
    // ex: autom search complete for user inouts

    // mergeMap: it runs inner observables parallely
    // ex: calling apis parallelly and getting individual responses and order is not gauranteed

    // concatMap: igt runs inner obseravbles one after the other in sequence and order response is also gaurented
    // ex: similar to calling apis nested

    // forkjoin: similar to promise.all().
    // exutes all innerobservables at a time and gets's response in single combined value
    // Emits a single combined value (array or object) with the last emitted value from each Observable.
    // If any Observable errors, the whole forkJoin errors out.

    // exhaustMap: while one inner Observable is active, it ignores all new source emissions until the current inner Observable completes.
    // So, exhaustMap is like saying: “I’m busy right now, ignore everything else until I finish.”

    // pluck: It extracts a property value from each emitted object in the stream.

// import { from } from 'rxjs';
// import { pluck } from 'rxjs/operators';

// const people$ = from([
//   { id: 1, profile: { age: 25, city: 'Hyderabad' } },
//   { id: 2, profile: { age: 30, city: 'Vizianagaram' } }
// ]);
// people$.pipe(
//   pluck('profile', 'city')
// ).subscribe(city => console.log(city));
// o/p: Hyderabedx
//      vizianagaram

    // Notes:

    // generally backend api's will only give data , they don'y know obseravble or promises 
    // the angular http wraps the response inside the obseravbles and then we are subscribing.
    // even after subscribing again we will get data only 
    // SO: now before subscribing and after http we need to apply rxjs operators, that is in the pipe. pipe is the place where we can apply rxjs operators.
    // normal js operators we will call like .map().filter with chaining
    // but from rxjs 7 on wards rxjs operators we can not like normal operators chaining, we need to call one after the other as sepearte arguments with comma(,) seperated. this improves tree shaing

    // earlier we used to convert observables to promises by .toPromise(). now this is deprecated
    // now we have 2 new things
    // firstValueFrom(observable), lastValueFrom(observable)


    // rxjs map, filter , reduce we can directly apply if the values are individual observables
    // if the values are observables with nested inside the we need to pass through mergeMap or conctMap or what ever which again resolves the observble into individual obseravbles and will pass to the other rjs operators

  };






}
