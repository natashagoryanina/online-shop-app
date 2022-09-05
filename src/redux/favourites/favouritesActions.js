import { createAction } from "@reduxjs/toolkit";
import { 
    ADDTOFAVE,
    SETFAVOURITES,
    REMOVEFROMFAVE,
    SETLOADER,
    SETERROR,
    RESETERROR,
} from "./favouritesTypes";

const addToFave = createAction(ADDTOFAVE);
const setFavourites = createAction(SETFAVOURITES);
const removeFromFave = createAction(REMOVEFROMFAVE);
const setLoader = createAction(SETLOADER)
const setError = createAction(SETERROR)
const resetError = createAction(RESETERROR);

export {
    addToFave,
    setFavourites,
    removeFromFave,
    setLoader,
    setError,
    resetError,
};