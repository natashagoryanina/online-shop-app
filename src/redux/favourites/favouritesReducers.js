import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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
});

const favouritesLoaderReducer = createReducer(false, {
    [setLoader]: (state) => !state,
});

const favouritesErrorReducer = createReducer("", {
    [setError]: (_, {payload}) => payload, 
    [resetError]: () => "",
});

const favouritesReducer = combineReducers({
    items: favouritesItemsReducer,
    loader: favouritesLoaderReducer,
    error: favouritesErrorReducer
});

export default favouritesReducer;