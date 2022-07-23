import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, removeFromCartByID } from '../../redux/cart/cartActions';
import { cartItemsSelector } from '../../redux/cart/cartSelectors';
import { LanguageContext } from '../App';
import CartListItem from './cartListItem/CartListItem';

const CartList = () => {
    const { language } = useContext(LanguageContext);

    const cart = useSelector(cartItemsSelector);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => {
            acc+=item.price;
            return acc;
        }, 0)
    };

    const removeFromCart = (id) => dispatch(removeFromCartByID(id));
    const order = () => dispatch(createOrder());

    return (
        <section>
            <div>
                <ul>
                    {cart.map(item => 
                        <CartListItem 
                            key={item.id}
                            removeFromCart={removeFromCart}
                            product={item} 
                        />
                    )}
                </ul>
                <hr/>
                <span>{language.cart.totalPrice}: {getTotalPrice()}</span>
                <button type="button" onClick={order}>{language.cart.makeOrder}</button>
            </div>
        </section>
    );
};

export default CartList;
