import React, { useState } from 'react';
import data from '../../data';
import AdminForm from '../admin/AdminForm';
import CartList from '../cartList/CartList';
import LaptopList from '../laptopList/LaptopList';
import PhoneList from '../phoneList/PhoneList';
import Section from '../Section';

const cartState = {
    cart: [],
};

const productsState = {
    phones:[...data.phones],
    laptops: [...data.laptops]
};

const Main = () => {
    const [cart, setCart] = useState(cartState);
    const [products, setProducts] = useState(productsState);

    const addToCart = (product) => {
        setCart((prev) => ({
            cart: [...prev.cart, product]
        }))
    };

    const removeFromCartById = (id) => {
        setCart((prev) => ({
            cart: [...prev.cart.filter(product => product.id !== id)]
        }))
    };

    const removeAllFromCart = () => {
        setCart((prev) => ({cart:[]}))
    };

    const addProduct = (product) => {
        setProducts((prev) => ({
            ...prev,
            [product.category]: [...prev[product.category], product],
        }));
    };

    return (
        <main>
            <Section title="Add new product">
                <AdminForm addProduct={addProduct}/>
            </Section>
            <Section title="Cart">
                <CartList cart={cart.cart} removeFromCart={removeFromCartById}/>
            </Section>
            <Section title="Phones">
                <PhoneList phones={products.phones} addToCart={addToCart}/>
            </Section>
            <Section title="Laptops">
                <LaptopList laptops={products.laptops} addToCart={addToCart}/>
            </Section>
        </main>
    );
};

export default Main;