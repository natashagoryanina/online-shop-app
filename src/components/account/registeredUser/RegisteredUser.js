import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/auth/authActions';

const RegisteredUser = () => {
    const dispatch = useDispatch();

    const logOut = () => dispatch(signOut());

    return (
        <>
            <h2>You are registered!</h2>
            <a href='/' onClick={logOut}>
                LOG OUT
            </a>
        </>
    );
};

export default RegisteredUser;