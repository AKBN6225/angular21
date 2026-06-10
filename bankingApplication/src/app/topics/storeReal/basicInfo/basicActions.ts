import { createAction, props } from "@ngrx/store";



export const updateFirstName = createAction('firstNameEdit', props<{fName: string}>());
export const updateLastName  = createAction('lastNameEdit', props<{lName: string}>());
export const updateMobile    = createAction('mobileEdit', props<{mobile: number}>());
export const updateEmail     = createAction('emailEdit', props<{email: string}>());
