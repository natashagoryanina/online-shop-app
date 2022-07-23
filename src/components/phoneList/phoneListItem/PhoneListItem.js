import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const PhoneListItem = ({phone, addProduct}) => {
    const { language } = useContext(LanguageContext);

    const addProductToCart = () => addProduct(phone);

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
        </li>
    );
};

export default PhoneListItem;
