import { combineReducers } from "redux";

const productItemsReducer = (state = { phones: [], laptops: [] }, action) => {
  return state;
};
const productsLoaderReducer = (state = false, action) => {
  return state;
};
const productsErrorReducer = (state = "", action) => {
  return state;
};

const productsReducer = combineReducers({
  items: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;