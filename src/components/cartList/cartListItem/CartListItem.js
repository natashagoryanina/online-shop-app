import React from 'react';
import { connect } from 'react-redux';
import sprite from '../../../icons/cart/sprite.svg';
import { removeFromCartByID } from '../../../redux/cart/cartActions';
import { CartListItemContainer } from './CartListItemStyled';

const CartListItem = ({product, removeFromCartByID}) => {
    
    const remove = () => removeFromCartByID(product.id);

    return (
        <CartListItemContainer>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <div className='delete-icon-container' onClick={remove}>
                <svg className='delete-icon'>
                    <use href={sprite + '#icon-bin'}/>
                </svg>
            </div>
        </CartListItemContainer>
    );
};

//! mdtp going to props of cartListitem
const mapDispatchToProps = {
    removeFromCartByID,
};

//! null (cause we get nothing from state), mapDispatchToProps - func to change state
export default connect(null, mapDispatchToProps)(CartListItem);