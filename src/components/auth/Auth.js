import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from './authForm/AuthForm';

const Auth = () => {
    const error = useSelector(state => state.auth.error);

    return (
        <div>
            <h2>
                Create Account 
            </h2>
            <AuthForm error={error}/>
            {error && <h3>{error}</h3>}
        </div>
    );
};

export default Auth;