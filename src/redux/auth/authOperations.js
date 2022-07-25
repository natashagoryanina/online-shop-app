import { signInUser, signUpUser } from "../../services/api";
import { 
    setLoader, 
    setError, 
    signUp, 
    signIn 
} from "./authActions";

const signUpOperation = (usersData) => 
    async (dispatch) => {
        dispatch(setLoader());
        try {
            const response = await signUpUser(usersData);
            dispatch(signUp(response));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
};

const signInOperation = (usersData) => 
    async (dispatch) => {
        dispatch(setLoader());
        try {
            const response = await signInUser(usersData);
            dispatch(signIn(response));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoader());
        }
};

export {
    signUpOperation,
    signInOperation
};