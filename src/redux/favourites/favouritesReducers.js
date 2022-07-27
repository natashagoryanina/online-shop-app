import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { signOut } from "../auth/authActions";
import { 
    addToFave, 
    removeFromFave,
    setLoader,
    setError,
    resetError,
} from "./favouritesActions";

const favouritesItemsReducer = createReducer([], {
    [addToFave]: (state, action) => [...state, action.payload],
    [removeFromFave]: (state, action) => state.filter(product => product.id !== action.payload),
    [signOut]: () => [],
});

const favouritesLoaderReducer = createReducer(false, {
    [setLoader]: (state) => !state,
    [signOut]: () => false,
});

const favouritesErrorReducer = createReducer("", {
    [setError]: (_, {payload}) => payload, 
    [resetError]: () => "",
    [signOut]: () => ""
});

const favouritesReducer = combineReducers({
    items: favouritesItemsReducer,
    loader: favouritesLoaderReducer,
    error: favouritesErrorReducer
});

export default favouritesReducer;