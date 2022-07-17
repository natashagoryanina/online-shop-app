import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { 
    resetError, 
    setError, 
    setLoader, 
    signIn, 
    signOut, 
    signUp 
} from "./authActions";

const authUserReducer = createReducer(null, {
    [signUp]: (_, action) => action.payload,
    [signIn]: (_, action) => action.payload,
    [signOut]: () => null 
});

const authLoaderReducer = createReducer(false, {
    [setLoader]: (state) => !state,
});

const authErrorReducer = createReducer("", {
    [setError]: (_, {payload}) => payload, 
    [resetError]: () => "",
});

const authReducer = combineReducers({
    user: authUserReducer,
    loader: authLoaderReducer,
    error: authErrorReducer,
});

export default authReducer;
