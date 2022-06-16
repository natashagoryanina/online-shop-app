import React from 'react';
import sprite from '../../../icons/cart/sprite.svg';
import { CartListItemContainer } from './CartListItemStyled';

const CartListItem = ({product, removeFromCart}) => {

    const remove = () => removeFromCart(product.id);

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

export default CartListItem;