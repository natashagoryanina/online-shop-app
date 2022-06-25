import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartActions';
import { LanguageContext } from '../../App';

const LaptopListItem = ({laptop, addToCart}) => {
    const { language } = useContext(LanguageContext);

    const addProduct = () => {
        addToCart(laptop)
    };

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
                onClick={addProduct}
            >
                {language.productItem.addToCart}
            </button>
        </li>
    );
};

export default connect(null, {addToCart})(LaptopListItem);