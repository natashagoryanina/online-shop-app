import { createAction } from "@reduxjs/toolkit";
import { ADDTOCART, CREATEORDER, REMOVEFROMCARTBYID, RESETERROR, SETERROR, SETLOADER } from "./cartTypes";

const addToCart = createAction(ADDTOCART)
const removeFromCartByID = createAction(REMOVEFROMCARTBYID);
const createOrder = createAction(CREATEORDER);
const setLoader = createAction(SETLOADER)
const setError = createAction(SETERROR)
const resetError = createAction(RESETERROR);

export {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
};