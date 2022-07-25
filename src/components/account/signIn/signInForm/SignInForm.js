import React, { useState } from 'react';

const SignInForm = ({resetErr}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleChange = (e) => {
        resetErr();
        const { name, value } = e.target;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        //signIn({email, password});
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
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default SignInForm;