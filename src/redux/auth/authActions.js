import { createAction } from "@reduxjs/toolkit";
import { 
    RESETERROR, 
    SETERROR, 
    SETLOADER, 
    SIGNIN, 
    SIGNOUT, 
    SIGNUP 
} from "./authTypes";

const signUp = createAction(SIGNUP);
const signIn = createAction(SIGNIN);
const signOut = createAction(SIGNOUT);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const resetError = createAction(RESETERROR);

export {
    signUp,
    signIn,
    signOut,
    setLoader,
    setError,
    resetError
};
