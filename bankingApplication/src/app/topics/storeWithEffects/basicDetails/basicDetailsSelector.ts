import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationState } from './basicDetailsState';


export const selectEffectsState = createFeatureSelector<organisationState>('effectsReducer');


export const selectOrganisationName = createSelector(selectEffectsState,
  (state: organisationState) => state.organisationName
);




