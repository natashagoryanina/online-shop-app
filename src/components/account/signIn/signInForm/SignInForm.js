import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignInForm = ({resetErr, signIn, language}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const onHandleChange = (e) => {
        resetErr();
        const { name, value } = e.target;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        signIn({email, password});
        navigate('/account');
    };


    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <label>
                    {language.signIn.email}
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    {language.signIn.password}
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
                    {language.signIn.signIn}
                </button>
            </form>
        </div>
    );
};

export default SignInForm;