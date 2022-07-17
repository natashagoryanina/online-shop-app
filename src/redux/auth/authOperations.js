import { signUpUser } from "../../services/api";
import { setLoader, setError, signUp } from "./authActions";

const signUpOperation = (usersData) => 
    async (dispatch) => {
        dispatch(setLoader());
        console.log(usersData)
        try {
            const response = await signUpUser(usersData);
            dispatch(signUp(response));
        } catch (error) {
            dispatch(setError(error.message));
            console.dir(error);
        } finally {
            dispatch(setLoader());
        }

};

export {
    signUpOperation
};