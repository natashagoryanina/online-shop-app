import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { LanguageContext } from '../App';
import LaptopListItem from './laptopListItem/LaptopListItem';

const LaptopList = ({laptops, addToCart}) => {
    const { language } = useContext(LanguageContext);
    let navigate = useNavigate();

    const goBack = () => {
        navigate('/products')
    };

    return (
        <div>
            <button type='button' onClick={goBack}>
                {language.productItem.goBackBtn}
            </button>
            <ul>
                {laptops.map((laptop) => (
                    <LaptopListItem 
                        laptop={laptop} 
                        key={laptop.id}
                        addToCart={addToCart}
                    />
                ))}
            </ul>
        </div>
    );
};

export default LaptopList;