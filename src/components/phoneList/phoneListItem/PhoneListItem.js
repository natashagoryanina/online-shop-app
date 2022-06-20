import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const PhoneListItem = ({phone, addToCart}) => {
    const { language } = useContext(LanguageContext);

    const addProduct = () => {
        addToCart(phone);
    };

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
                onClick={addProduct}
            >
                {language.productItem.addToCart}
            </button>
        </li>
    );
};

export default PhoneListItem;