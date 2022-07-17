import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetError } from '../../../redux/auth/authActions';
import { signUpOperation } from '../../../redux/auth/authOperations';

const AuthForm = ({error}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onHandleChange = (e) => {
        error && dispatch(resetError());
        
        const { name, value } = e.target;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpOperation({email, password}))
        console.log({email, password});
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <label>
                    Email
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    Password 
                    <input 
                        type="text" 
                        name='password'
                        value={password}
                        onChange={onHandleChange}
                    />
                </label>
                <button
                    type='submit'
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default AuthForm;