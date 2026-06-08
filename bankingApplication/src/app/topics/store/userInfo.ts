
export const userObject = {
    name: "",
    mobile: "",
    email: ""
};

// action({type:'name', payload: "arun"})  // action will take an object with two values
// reducer function will take two parameters

export function userReducer(state = userObject, action: any) {

    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: action.payload
            }
        case 'mobile':
            return {
                ...state,
                mobile: action.payload
            }
        case 'email':
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
        
    }

}