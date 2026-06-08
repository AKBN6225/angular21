import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/ngrxState';
@Component({
  selector: 'app-ngrx-data-bind',
  imports: [],
  templateUrl: './ngrx-data-bind.html',
  styleUrl: './ngrx-data-bind.scss',
})
export class NgrxDataBind implements OnInit {

  userStoreData: any;

  constructor(
    private store: Store<AppState>,
  ) {

  };

  ngOnInit() {
    this.accessStore();
  };


  accessStore() {
    this.store.select('userDetails').subscribe((data: any) => {
      console.log(data);
      this.userStoreData = data;
    });
  }



}
