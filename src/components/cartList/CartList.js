import React, { useContext } from 'react';
import { connect, useSelector } from 'react-redux';
import { createOrder } from '../../redux/cart/cartActions';
import { cartItemsSelector } from '../../redux/cart/cartSelectors';
import { LanguageContext } from '../App';
import CartListItem from './cartListItem/CartListItem';

const CartList = ({createOrder}) => {
    const { language } = useContext(LanguageContext);

    const cart = useSelector(cartItemsSelector);

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
                <button type="button" onClick={createOrder}>{language.cart.makeOrder}</button>
            </div>
        </section>
    );
};

export default connect(null, {createOrder})(CartList);
