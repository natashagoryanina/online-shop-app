import { createAction } from "@reduxjs/toolkit";
import { 
    RESETERROR, 
    SETERROR, 
    SETLOADER, 
    SIGNIN, 
    SIGNOUT, 
    SIGNUP,
    SIGNUPSUCCESS,
    SIGNUPREQUEST,
    SIGNUPERROR,
} from "./authTypes";

const signUp = createAction(SIGNUP);
const signIn = createAction(SIGNIN);
const signOut = createAction(SIGNOUT);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const resetError = createAction(RESETERROR);
const signUpSuccess = createAction(SIGNUPSUCCESS);
const signUpRequest = createAction(SIGNUPREQUEST);
const signUpError = createAction(SIGNUPERROR);

export {
    signUp,
    signIn,
    signOut,
    setLoader,
    setError,
    resetError,
    signUpSuccess,
    signUpRequest,
    signUpError
};
