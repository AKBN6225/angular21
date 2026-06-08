import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../store/ngrxState';

@Component({
  selector: 'app-ngrx',
  imports: [],
  templateUrl: './ngrx.html',
  styleUrl: './ngrx.scss',
})
export class Ngrx implements OnInit {

  constructor(
    private store: Store<AppState>,
    private route: Router
  ) {

  };

  ngOnInit() {
    this.accessStore();
  };

  accessStore() {
    this.store.subscribe((data: any) => {
      console.log(data.userDetails, "initial page");
    });
  }

  sendDataToStore(typeVal: any,value: any) {
    this.store.dispatch({ type: typeVal, payload: value });
  };

  moveTo() {
    this.route.navigate(["/ngrxDataBind"]);
  }

}
