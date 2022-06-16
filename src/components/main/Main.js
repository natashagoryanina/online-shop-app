import React, { useState } from 'react';
import data from '../../data';
import CartList from '../cartList/CartList';
import LaptopList from '../laptopList/LaptopList';
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
            <CartList cart={cart.cart} removeFromCart={removeFromCartById}/>
            <PhoneList phones={data.phones} addToCart={addToCart}/>
            <LaptopList laptops={data.laptops} addToCart={addToCart}/>
        </main>
    );
};

export default Main;