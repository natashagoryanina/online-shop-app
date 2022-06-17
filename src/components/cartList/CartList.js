import React from 'react';
import Section from '../Section';
import CartListItem from './cartListItem/CartListItem';

const CartList = ({cart, removeFromCart}) => {

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
            <span>Total Price: {getTotalPrice()}</span>
        </div>
    );
};

export default CartList;