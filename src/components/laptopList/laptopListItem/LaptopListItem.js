import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const LaptopListItem = ({laptop, addProduct}) => {
    const { language } = useContext(LanguageContext);

    const addProductToCart = () => addProduct(laptop);

    return (
        <li>
            <h3>{laptop.name}</h3>
            <img src={laptop.image} alt={laptop.name} />
            <p>{laptop.description}</p>
            <p>
                {language.productItem.price}: <span>{laptop.price}</span>
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

export default LaptopListItem;