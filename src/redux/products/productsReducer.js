import { combineReducers } from "redux";
import { 
  resetError, 
  setError, 
  setLaptops, 
  setLoader, 
  setPhones 
} from "./productsActions";

const productItemsReducer = combineReducers({ phones: [], laptops: [] }, {
  [setPhones]: (state, action) => ({...state, phones: action.payload}),
  [setLaptops]: (state, action) => ({...state, laptops: action.payload}),
});

const productsLoaderReducer = combineReducers(false, {
  [setLoader]: (state) => !state, 
});

const productsErrorReducer = combineReducers("", {
  [setError]: (_, {payload}) => payload,
  [resetError]: () => "",
});

const productsReducer = combineReducers({
  items: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;