import { createAction } from "@reduxjs/toolkit";
import { 
    ADDTOFAVE,
    REMOVEFROMFAVE,
    SETLOADER,
    SETERROR,
    RESETERROR,
} from "./favouritesTypes";

const addToFave = createAction(ADDTOFAVE);
const removeFromFave = createAction(REMOVEFROMFAVE);
const setLoader = createAction(SETLOADER)
const setError = createAction(SETERROR)
const resetError = createAction(RESETERROR);

export {
    addToFave,
    removeFromFave,
    setLoader,
    setError,
    resetError,
};