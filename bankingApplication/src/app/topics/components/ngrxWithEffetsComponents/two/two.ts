import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from  '../../../storeWithEffects/ngrxAppState';
import { selectOrganisationName } from '../../../storeWithEffects/basicDetails/basicDetailsSelector';

@Component({
  selector: 'app-two',
  imports: [],
  templateUrl: './two.html',
  styleUrl: './two.scss',
})
export class Two implements OnInit {

  orgName: string = "";


  constructor(private store: Store<AppState>) {

  };

  ngOnInit() {
    this.checkEffectsStore();
  };

  // checkEffectsStore() {
  //   this.store.select((state: any) => state.effectsReducer.organisationName)
  //     .subscribe((data: any) => {
  //       console.log(data, "second component");
  //       this.orgName = data;
  //     });
  // };

  // above is through manual way

  // below is through selector

  // * one is directly we can subscribe complete strore withiout any of these two approaches 

  
checkEffectsStore() {
  this.store.select(selectOrganisationName).subscribe((name: string) => {
    console.log(name);
    this.orgName = name;
  });
}



}
