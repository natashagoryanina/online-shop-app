import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../../redux/auth/authActions';
import { signUpOperation } from '../../../redux/auth/authOperations';
import { authErrorSelector } from '../../../redux/auth/authSelectors';
import { LanguageContext } from '../../App';
import SignUpForm from './signUpForm/SignUpForm';

const SignUp = () => {
    const { language } = useContext(LanguageContext);
    const dispatch = useDispatch();
    const error = useSelector(authErrorSelector);

    const resetErr = () => error && dispatch(resetError());
    const signUp = (usersData) => dispatch(signUpOperation(usersData));

    return (
        <div>
            <h2>{language.signUp.title}</h2>
            <SignUpForm
                resetErr={resetErr}
                signUp={signUp}
                language={language}
            />
            {error && <h3>{error}</h3>}
            <p>
                {language.signUp.question}?
                <a href='/account/login'>
                    {language.signUp.signIn}!
                </a>
            </p>
        </div>
    );
};

export default SignUp;