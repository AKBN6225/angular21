import { createReducer, on } from "@ngrx/store";
import { organisationState } from "../basicDetails/basicDetailsState";
import {basicDetailsOrganisation, basicEffectscallingApiData } from './basicDetailsActions';




let initialState: organisationState = {
    organisationName: "",
    employees: []
};




export const basicDetailsReducerEff = createReducer(initialState,
  on(basicDetailsOrganisation, (state, action) => ({
    ...state,
    organisationName: action.orgName
  })),

  on(basicEffectscallingApiData, (state,action) => ({
    ...state,
    employees: action.employees
  }))
);
