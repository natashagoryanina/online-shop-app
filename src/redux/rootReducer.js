import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer
});

export default rootReducer;