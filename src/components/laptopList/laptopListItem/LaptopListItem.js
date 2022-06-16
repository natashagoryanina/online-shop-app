import React from 'react';

const LaptopListItem = ({laptop, addToCart}) => {

    const addProduct = () => {
        addToCart(laptop)
    };

    return (
        <li>
            <h3>{laptop.name}</h3>
            <img src={laptop.image} alt={laptop.name} />
            <p>{laptop.description}</p>
            <p>
                Price: <span>{laptop.price}</span>
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

export default LaptopListItem;