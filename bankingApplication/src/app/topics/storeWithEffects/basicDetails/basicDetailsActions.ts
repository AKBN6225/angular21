import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";





export const basicDetailsOrganisation = createAction('organisation', props<{orgName: string}>() );

export const basicEffectsCallingApi = createAction('apiCall');
export const basicEffectscallingApiData = createAction('fetchUsers', props<{employees: any[]}>())