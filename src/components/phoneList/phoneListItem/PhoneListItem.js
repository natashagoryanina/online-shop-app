import React from 'react';

const PhoneListItem = ({phone, addToCart}) => {

    const addProduct = () => {
        addToCart(phone);
    };

    return (
        <li>
            <h3>{phone.name}</h3>
            <img src={phone.image} alt={phone.name} />
            <p>{phone.description}</p>
            <p>
                Price: <span>{phone.price}</span>
            </p>
            <button 
                type="button" 
                onClick={addProduct}
            >
                Add to Cart
            </button>
        </li>
    );
};

export default PhoneListItem;