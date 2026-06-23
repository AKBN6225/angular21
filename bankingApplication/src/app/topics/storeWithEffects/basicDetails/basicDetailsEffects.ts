
import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BasicDetailsService } from "./basic-details-service";
import { basicEffectsCallingApi, basicEffectscallingApiData } from "./basicDetailsActions";
import { switchMap, map } from "rxjs/operators";

@Injectable()
export class BasicDetailsEffects {

  
  getUsers$ = createEffect(() => {
    const actions$ = inject(Actions);
    const service = inject(BasicDetailsService);

    return actions$.pipe(
      ofType(basicEffectsCallingApi),
      switchMap(() =>
        service.callEffectsApi().pipe(
          map((data: any) =>
            basicEffectscallingApiData({ employees: data })
          )
        )
      )
    );
  });

}
