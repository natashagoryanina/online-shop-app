import { createAction } from "@reduxjs/toolkit";
import { RESETERROR, SETERROR, SETLAPTOPS, SETLOADER, SETPHONES } from "./productsTypes";

const setPhones = createAction(SETPHONES);
const setLaptops = createAction(SETLAPTOPS);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const resetError = createAction(RESETERROR);

export { 
    setError, 
    resetError, 
    setLoader, 
    setPhones, 
    setLaptops 
};