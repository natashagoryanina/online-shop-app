import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUpForm = ({resetErr, signUp, language, error}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

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
        signUp({firstName, lastName, email, password});
        console.log(signUp({firstName, lastName, email, password}));
        navigate('/account');
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                    <label>
                        {language.signUp.firstName}
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={onHandleChange}
                        />
                    </label>
                    <label>
                        {language.signUp.lastName}
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={onHandleChange}
                        />
                    </label>
                    <label>
                        {language.signUp.email}
                        <input
                            type='text'
                            name='email'
                            value={email}
                            onChange={onHandleChange}
                        />
                    </label>
                    <label>
                        {language.signUp.password}
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
                        {language.signUp.signUp}
                    </button>
            </form>
        </div>
    );
};

export default SignUpForm;