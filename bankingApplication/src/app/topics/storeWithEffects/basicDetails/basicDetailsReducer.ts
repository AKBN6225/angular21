import { createReducer, on } from "@ngrx/store";
import { organisationState} from "../basicDetails/basicDetailsState";
import {basicDetailsOrganisation } from './basicDetailsActions';



let initialState: organisationState = {
    organisationName: ""
};


export const basicDetailsReducerEff = createReducer(initialState,
  on(basicDetailsOrganisation, (state, action) => ({
    ...state,
    organisationName: action.orgName
  }))
);
