import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../../redux/auth/authActions';
import { signUpOperation } from '../../../redux/auth/authOperations';
import { authErrorSelector } from '../../../redux/auth/authSelectors';
import SignUpForm from './signUpForm/SignUpForm';

const SignUp = () => {
    const dispatch = useDispatch();
    const error = useSelector(authErrorSelector);

    const resetErr = () => error && dispatch(resetError());
    const signUp = (usersData) =>  dispatch(signUpOperation(usersData));

    return (
        <div>
            <h2>Create Account</h2>
            <SignUpForm
                resetErr={resetErr}
                signUp={signUp}
            />
            {error && <h3>{error}</h3>}
            <p>
                Already have an account?
                <a href='/account/login'>
                    Sign in!
                </a>
            </p>
        </div>
    );
};

export default SignUp;