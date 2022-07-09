import { getProductsByCategory } from "../../services/api";
import { setLoader } from "./productsActions";

const getAllProductsByCategoryOperation = (category, callback) => 
    async (dispatch) => {
        dispatch(setLoader());
        try {
            const response = await getProductsByCategory(category);
            dispatch(callback(response));
        } catch (error) {
            
        } finally {
            dispatch(setLoader());
        }
};

export {
    getAllProductsByCategoryOperation
};