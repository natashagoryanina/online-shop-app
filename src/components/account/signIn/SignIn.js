import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../../redux/auth/authActions';
import { authErrorSelector } from '../../../redux/auth/authSelectors';
import SignInForm from './signInForm/SignInForm';

const SignIn = () => {
    const dispatch = useDispatch();
    const error = useSelector(authErrorSelector);

    const resetErr = () => error && dispatch(resetError());

    return (
        <div>
            <h2>Login</h2>
            <SignInForm
                resetErr={resetErr}
            />
             {error && <h3>{error}</h3>}
            <p>
                Don't have an account?
                <a href='/account/register'>
                    Sign up!
                </a>
            </p>
        </div>
    );
};

export default SignIn;