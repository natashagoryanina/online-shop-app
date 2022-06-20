import React, { useContext, useEffect, useState } from 'react';
import { createNewAdv, getProductsByCategory } from '../../services/api';
import AdminForm from '../admin/AdminForm';
import { LanguageContext } from '../App';
import CartList from '../cartList/CartList';
import LaptopList from '../laptopList/LaptopList';
import PhoneList from '../phoneList/PhoneList';
import Section from '../Section';

const cartState = {
    cart: [],
};

const productsState = {
    phones:[],
    laptops: []
};

const Main = () => {
    const [cart, setCart] = useState(cartState);
    const [products, setProducts] = useState(productsState);

    useEffect(() => {
        getProductsByCategory('phones').then(phones => 
            phones && setProducts((prev) => ({...prev, phones})));
        getProductsByCategory('laptops').then(laptops => 
            laptops && setProducts((prev) => ({...prev, laptops})));
    }, [])

    const { language } = useContext(LanguageContext);

    // cart operations
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

    // admin add product
    const addProduct = async (product) => {
        try {
            const id = await createNewAdv(product);
            setProducts((prev) => ({
                ...prev,
                [product.category]: [...prev[product.category], {...product, id}],
            }));
        } catch (error) {
            
        }
    };

    return (
        <main>
            <Section title={language.section.admin}>
                <AdminForm addProduct={addProduct}/>
            </Section>
            <Section title={language.section.cart}>
                <CartList 
                    cart={cart.cart} 
                    removeFromCart={removeFromCartById}
                    removeAllFromCart={removeAllFromCart}
                />
            </Section>
            <Section title={language.section.phones}>
                <PhoneList phones={products.phones} addToCart={addToCart}/>
            </Section>
            <Section title={language.section.laptops}>
                <LaptopList laptops={products.laptops} addToCart={addToCart}/>
            </Section>
        </main>
    );
};

export default Main;