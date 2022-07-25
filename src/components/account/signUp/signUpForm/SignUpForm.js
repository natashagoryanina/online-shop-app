import React, { useState } from 'react';

const SignUpForm = ({resetErr, signUp}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleChange = (e) => {
        resetErr();
        const { name, value } = e.target;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
        name === 'firstName' && setFirstName(value);
        name === 'lastName' && setLastName(value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        signUp({email, password});
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                    <label>
                        First Name
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={onHandleChange}
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={onHandleChange}
                        />
                    </label>
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

export default SignUpForm;