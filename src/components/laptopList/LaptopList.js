import React from 'react';
import Section from '../Section';
import LaptopListItem from './laptopListItem/LaptopListItem';

const LaptopList = ({laptops, addToCart}) => {
    return (
        <Section title="Laptops">
            <ul>
                {laptops.map((laptop) => (
                    <LaptopListItem 
                        laptop={laptop} 
                        key={laptop.id}
                        addToCart={addToCart}
                    />
                ))}
            </ul>
        </Section>
    );
};

export default LaptopList;