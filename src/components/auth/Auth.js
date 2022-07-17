import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../redux/auth/authActions';
import { signUpOperation } from '../../redux/auth/authOperations';
import { authErrorSelector } from '../../redux/auth/authSelectors';
import AuthForm from './authForm/AuthForm';

const Auth = () => {
    const dispatch = useDispatch();
    const error = useSelector(authErrorSelector);

    const resetErr = () => error && dispatch(resetError());
    const signUp = (usersData) =>  dispatch(signUpOperation(usersData));

    return (
        <div>
            <h2>
                Create Account 
            </h2>
            <AuthForm 
                resetErr={resetErr}
                signUp={signUp}
            />
            {error && <h3>{error}</h3>}
        </div>
    );
};

export default Auth;