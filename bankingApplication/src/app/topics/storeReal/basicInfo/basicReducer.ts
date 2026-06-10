import { createReducer, on } from "@ngrx/store";
import { basicState } from "./basicState";
import { updateFirstName } from "./basicActions";
import { updateLastName } from "./basicActions";
import { updateMobile } from "./basicActions";
import { updateEmail } from "./basicActions";


let initialState: basicState = {
    firstName: "",
    lastName: "",
    mobile: null,
    email: ""
}



export const basicReducer = createReducer(initialState,

    on(updateFirstName, (state, action) => ({
        ...state,
        firstName: action.fName
    })),
    on(updateLastName, (state, action) => ({
        ...state,
        lastName: action.lName
    })),
    on(updateMobile, (state, action) => ({
        ...state,
        mobile: action.mobile
    })),
    on(updateEmail, (state, action) => ({
        ...state,
        email: action.email
    }))
)