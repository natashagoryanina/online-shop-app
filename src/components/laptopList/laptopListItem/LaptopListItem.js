import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import sprite from '../../../icons/items/sprite.svg';

const LaptopListItem = ({laptop, addProduct, addItemToFave}) => {
    const { language } = useContext(LanguageContext);

    const addProductToCart = () => addProduct(laptop);
    const addToFavourites = () => addItemToFave(laptop);

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
            <div>
                <svg>
                    <use href={sprite + '#icon-heart'} onClick={addToFavourites}/>
                </svg>
            </div>
        </li>
    );
};

export default LaptopListItem;