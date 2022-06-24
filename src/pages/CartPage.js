import React, { useContext } from 'react';
import { LanguageContext } from '../components/App';
import CartList from '../components/cartList/CartList';
import Section from '../components/Section';

const CartPage = ({cart, removeAllFromCart}) => {
    const { language } = useContext(LanguageContext);

    return (
        <Section title={language.section.cart}>
            <CartList 
                    cart={cart.cart} 
                    removeAllFromCart={removeAllFromCart}
                />
        </Section>
    );
};

export default CartPage;