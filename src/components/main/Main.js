import React, { useState } from 'react';
import data from '../../data';
import PhoneList from '../phoneList/PhoneList';

const initialState = {
    cart: [],
    phones:[],
    laptops: []
};

const Main = () => {
    const [cart, setCart] = useState(initialState);

    const addToCart = (product) => {
        setCart((prev) => ({
            ...prev,
            cart: [...prev.cart, product]
        }))
    };

    const removeFromCartById = (id) => {
        setCart((prev) => ({
            ...prev,
            cart: [...prev.cart.filter(product => product.id !== id)]
        }))
    };

    const removeAllFromCart = () => {
        setCart((prev) => ({...prev, cart:[]}))
    };

    return (
        <main>
            <PhoneList phones={data.phones} addToCart={addToCart}/>
        </main>
    );
};

export default Main;