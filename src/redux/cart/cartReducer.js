import { combineReducers } from "redux";

const cartItemsReducer = (state = [], action) => {
    return state;
};

const cartLoaderReducer = (state = false, action) => {
    return state;
};

const cartErrorReducer = (state = "", action) => {
    return state;
};

const cartReducer = combineReducers({
    items: cartItemsReducer,
    loader: cartLoaderReducer,
    error: cartErrorReducer,
});
  
export default cartReducer;