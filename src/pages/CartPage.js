import React, { useContext } from 'react';
import { LanguageContext } from '../components/App';
import CartList from '../components/cartList/CartList';
import Section from '../components/Section';

const CartPage = ({cart, removeFromCartById, removeAllFromCart}) => {
    const { language } = useContext(LanguageContext);

    return (
        <Section title={language.section.cart}>
            <CartList 
                    cart={cart.cart} 
                    removeFromCart={removeFromCartById}
                    removeAllFromCart={removeAllFromCart}
                />
        </Section>
    );
};

export default CartPage;