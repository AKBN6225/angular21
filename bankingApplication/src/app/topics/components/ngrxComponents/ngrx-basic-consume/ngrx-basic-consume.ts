import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-basic-consume',
  imports: [],
  templateUrl: './ngrx-basic-consume.html',
  styleUrl: './ngrx-basic-consume.scss',
})
export class NgrxBasicConsume implements OnInit {

  basicDetails: any;

  constructor(
    private store: Store,
  ) {

  };

  ngOnInit() {
    this.checkStore();
  };

  checkStore() {
    this.store.subscribe((data: any) => {
      console.log(data, "check here");
      this.basicDetails = data.basic;
      console.log(this.basicDetails, "check here");
    })
  }

}
