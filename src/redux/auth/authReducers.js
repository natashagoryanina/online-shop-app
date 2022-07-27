import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { 
    resetError, 
    setError, 
    setLoader, 
    signIn, 
    signOut, 
    signUp,
} from "./authActions";

const authUserReducer = createReducer(null, {
    [signUp]: (_, action) => ({email: action.payload.email}),
    [signIn]: (_, action) => ({email: action.payload.email}),
    [signOut]: () => null
});

const authTokensReducer = createReducer(null, {
    [signUp]: (_, action) => ({
        idToken: action.payload.idToken,
        refreshToken: action.payload.refreshToken,
        localId: action.payload.localId,
    }),
    [signIn]: (_, action) => ({
        idToken: action.payload.idToken,
        refreshToken: action.payload.refreshToken,
        localId: action.payload.localId,
    }),
    [signOut]: () => null
});

const authLoaderReducer = createReducer(false, {
    [setLoader]: (state) => !state,
    [signOut]: () => false,
});

const authErrorReducer = createReducer("", {
    [setError]: (_, {payload}) => payload, 
    [resetError]: () => "",
    [signOut]: () => "",
});

const authReducer = combineReducers({
    user: authUserReducer,
    tokens: authTokensReducer,
    loader: authLoaderReducer,
    error: authErrorReducer,
});

export default authReducer;
