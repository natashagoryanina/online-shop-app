import { createAction } from "@reduxjs/toolkit";
import { 
  ADDTOCART, 
  CREATEORDER, 
  REMOVEFROMCARTBYID, 
  RESETERROR, 
  SETERROR, 
  SETLOADER,
  REMOVEALLFROMCART,
} from "./cartTypes";

const addToCart = createAction(ADDTOCART)
const removeFromCartByID = createAction(REMOVEFROMCARTBYID);
const removeAllFromCart = createAction(REMOVEALLFROMCART);
const createOrder = createAction(CREATEORDER);
const setLoader = createAction(SETLOADER)
const setError = createAction(SETERROR)
const resetError = createAction(RESETERROR);

export {
  addToCart,
  removeFromCartByID,
  removeAllFromCart,
  createOrder,
  setLoader,
  setError,
  resetError,
};