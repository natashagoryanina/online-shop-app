import React, { useContext } from 'react';
import { LanguageContext } from '../components/App';
import CartList from '../components/cartList/CartList';
import Section from '../components/Section';

const CartPage = () => {
    const { language } = useContext(LanguageContext);

    return (
        <Section>
            <CartList/>
        </Section>
    );
};

export default CartPage;