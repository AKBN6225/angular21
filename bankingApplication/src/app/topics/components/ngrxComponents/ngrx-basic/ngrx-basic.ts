import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateFirstName, updateLastName, updateMobile, updateEmail } from '../../../storeReal/basicInfo/basicActions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngrx-basic',
  imports: [],
  templateUrl: './ngrx-basic.html',
  styleUrl: './ngrx-basic.scss',
})
export class NgrxBasic implements OnInit {

  constructor(
    private store: Store,
    private route: Router
  ) {

  };

  ngOnInit() {
    this.checkStore();
  };

  checkStore() {
    this.store.subscribe((data) => {
      console.log(data);
    })
  }

  updateDataToStore(val: any, field: any) {
    console.log(val, field);

    // if (field == "firstNameEdit") {
    //   this.store.dispatch(updateFirstName({ fName: val }));
    // } else if (field == "lastNameEdit") {
    //   this.store.dispatch(updateLastName({ lName: val }));
    // } else if (field == "mobileEdit") {
    //   this.store.dispatch(updateMobile({ mobile: val }));
    // } else {
    //   this.store.dispatch(updateEmail({ email: val }));
    // }

    // we can handle through if else blocks and switch as well

    switch (field){

      case "firstNameEdit":
      this.store.dispatch(updateFirstName({ fName: val }));
      break;

      case "lastNameEdit":
      this.store.dispatch(updateLastName({ lName: val }));
      break;

      case "mobileEdit":
      this.store.dispatch(updateMobile({ mobile: val }));
      break;

      default:
      this.store.dispatch(updateEmail({ email: val }));

    }


  };


  naviagteToConsume() {
    this.route.navigate(['/ngrxBasicConsume']);
  }



}
