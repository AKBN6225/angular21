import { Component, OnInit } from '@angular/core';
import { Two } from '../two/two';
import { Store } from '@ngrx/store';
import { basicDetailsOrganisation } from '../../../storeWithEffects/basicDetails/basicDetailsActions'

@Component({
  selector: 'app-one',
  imports: [Two],
  templateUrl: './one.html',
  styleUrl: './one.scss',
})
export class One implements OnInit {


  constructor(private store: Store){

  };

  ngOnInit(){
    
  };

  sendDataToStore(orgg:string){
    this.store.dispatch(basicDetailsOrganisation({orgName: orgg}));
  }
}
