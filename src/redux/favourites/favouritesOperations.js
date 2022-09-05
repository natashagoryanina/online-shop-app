import { addFaveItem, getFavouriteItems } from "../../services/api";
import { addToFave, setError, setFavourites, setLoader } from "./favouritesActions";

const addItemToFavouritesOperation = (item) => 
    async (dispatch, getState) => {
        const localId = getState().auth.tokens.localId;
        const idToken = getState().auth.tokens.idToken;
        dispatch(setLoader());
        try {
            addFaveItem(item, localId, idToken);
            dispatch(addToFave(item));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
};

const getFavouriteItemsOperation = () => 
    async (dispatch, getState) => {
        const localId = getState().auth.tokens.localId;
        const idToken = getState().auth.tokens.idToken;
        dispatch(setLoader());
        try {
            const response = await getFavouriteItems(localId, idToken);
            dispatch(setFavourites(response))
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
};

export {
    addItemToFavouritesOperation,
    getFavouriteItemsOperation,
};