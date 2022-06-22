import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { 
    addToCart, 
    createOrder, 
    removeFromCartByID, 
    resetError, 
    setError, 
    setLoader 
} from "./cartActions";

const cartItemsReducer = createReducer([], {
    [addToCart]: (state, action) => [...state, action.payload],
    [removeFromCartByID]: (state, action) => state.filter(product => product.id !== action.payload),
    [createOrder]: () => {},
});

const cartLoaderReducer = createReducer(false, {
    [setLoader]: (state) => !state,
});

const cartErrorReducer = createReducer("", {
    [setError]: (_, {payload}) => payload, 
    [resetError]: () => "",
});

const cartReducer = combineReducers({
    items: cartItemsReducer,
    loader: cartLoaderReducer,
    error: cartErrorReducer,
});
  
export default cartReducer;