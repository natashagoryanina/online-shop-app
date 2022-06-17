import React from 'react';
import Section from '../Section';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = ({phones, addToCart}) => {
    return (
        <ul>
            {phones.map((phone) => (
                <PhoneListItem 
                    phone={phone} 
                    key={phone.id} 
                    addToCart={addToCart}
                />
            ))}
        </ul>
    );
};

export default PhoneList;