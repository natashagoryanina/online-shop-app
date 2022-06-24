import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import CartListItem from './cartListItem/CartListItem';

const CartList = ({cart, removeAllFromCart}) => {
    const { language } = useContext(LanguageContext);

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => {
            acc+=item.price;
            return acc;
        }, 0)
    };

    return (
        <section>
            <div>
                <ul>
                    {cart.map(item => 
                        <CartListItem 
                        key={item.id}
                        product={item} 
                        />
                    )}
                </ul>
                <hr/>
                <span>{language.cart.totalPrice}: {getTotalPrice()}</span>
                <button type="button" onClick={removeAllFromCart}>{language.cart.makeOrder}</button>
            </div>
        </section>
    );
};

export default CartList;