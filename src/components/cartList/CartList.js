import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Section from '../Section';
import CartListItem from './cartListItem/CartListItem';

const CartList = ({cart, removeFromCart, removeAllFromCart}) => {
    const { language } = useContext(LanguageContext);

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => {
            acc+=item.price;
            return acc;
        }, 0)
    };

    return (
        <div>
            <ul>
                {cart.map(item => 
                    <CartListItem 
                    key={item.id}
                    product={item} 
                    removeFromCart={removeFromCart}
                    />
                )}
            </ul>
            <hr/>
            <span>{language.cart.totalPrice}: {getTotalPrice()}</span>
            <button type="button" onClick={removeAllFromCart}>{language.cart.makeOrder}</button>
        </div>
    );
};

export default CartList;