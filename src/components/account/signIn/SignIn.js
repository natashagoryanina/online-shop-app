import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../../redux/auth/authActions';
import { signInOperation } from '../../../redux/auth/authOperations';
import { authErrorSelector } from '../../../redux/auth/authSelectors';
import { LanguageContext } from '../../App';
import SignInForm from './signInForm/SignInForm';

const SignIn = () => {
    const { language } = useContext(LanguageContext);
    const dispatch = useDispatch();
    const error = useSelector(authErrorSelector);

    const resetErr = () => error && dispatch(resetError());
    const signIn = (usersData) => dispatch(signInOperation(usersData));

    return (
        <div>
            <h2>{language.signIn.title}</h2>
            <SignInForm
                resetErr={resetErr}
                signIn={signIn}
                language={language}
            />
             {error && <h3>{error}</h3>}
            <p>
                {language.signIn.question}?
                <a href='/account'>
                    {language.signIn.signUp}!
                </a>
            </p>
        </div>
    );
};

export default SignIn;