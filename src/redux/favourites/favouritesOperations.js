import { addFaveItem } from "../../services/api";
import { addToFave, setError, setLoader } from "./favouritesActions";

const addItemToFavouritesOperation = (item) => 
    async (dispatch, getState) => {
        const localId = getState().auth.tokens.localId;
        dispatch(setLoader());
        try {
            addFaveItem(item, localId );
            dispatch(addToFave(item));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
};

export {
    addItemToFavouritesOperation,
};