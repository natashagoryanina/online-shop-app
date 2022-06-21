import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { LanguageContext } from '../App';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = ({phones, addToCart}) => {
    const { language } = useContext(LanguageContext);
    let navigate = useNavigate();

    const goBack = () => {
        navigate('/products');
    };

    return (
        <div>
            <button type='button' onClick={goBack}>
                &laquo;
                {language.productItem.goBackBtn}
            </button>
            <ul>
                {phones.map((phone) => (
                    <PhoneListItem 
                        phone={phone} 
                        key={phone.id} 
                        addToCart={addToCart}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PhoneList;