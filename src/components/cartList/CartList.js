import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../../redux/cart/cartActions';
import { LanguageContext } from '../App';
import CartListItem from './cartListItem/CartListItem';

const CartList = ({cart, createOrder}) => {
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
                <button type="button" onClick={createOrder}>{language.cart.makeOrder}</button>
            </div>
        </section>
    );
};

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart.items
});

export default connect(mapStateToProps, {createOrder})(CartList);
