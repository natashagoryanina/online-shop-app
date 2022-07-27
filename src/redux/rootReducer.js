import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
    key: 'user',
    storage: storage,
    whitelist: ['user', 'tokens']
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth: persistReducer(config, authReducer),
});

export default rootReducer;