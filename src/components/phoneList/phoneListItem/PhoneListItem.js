import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import sprite from '../../../icons/items/sprite.svg';

const PhoneListItem = ({phone, addProduct, addItemToFave}) => {
    const { language } = useContext(LanguageContext);

    const addProductToCart = () => addProduct(phone);
    const addToFavourites = () => addItemToFave(phone);

    return (
        <li>
            <h3>{phone.name}</h3>
            <img src={phone.image} alt={phone.name} />
            <p>{phone.description}</p>
            <p>
                {language.productItem.price}: <span>{phone.price}</span>
            </p>
            <button 
                type="button" 
                onClick={addProductToCart}
            >
                {language.productItem.addToCart}
            </button>
            <div>
                <svg>
                    <use href={sprite + '#icon-heart'} onClick={addToFavourites}/>
                </svg>
            </div>
        </li>
    );
};

export default PhoneListItem;
