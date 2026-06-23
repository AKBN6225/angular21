import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { AppState } from '../../../storeWithEffects/ngrxAppState';
import { selectEmployees, selectOrganisationName } from '../../../storeWithEffects/basicDetails/basicDetailsSelector';

@Component({
  selector: 'app-two',
  imports: [AsyncPipe],   
  templateUrl: './two.html',
  styleUrl: './two.scss'
})
export class Two {

  orgName$: Observable<string>;
  employees$: Observable<any[]>;

  constructor(private store: Store<AppState>) {
    this.orgName$ = this.store.select(selectOrganisationName);
    this.employees$ = this.store.select(selectEmployees);
  }

}
``