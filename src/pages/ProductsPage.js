import React, { useContext } from 'react';
import { LanguageContext } from '../components/App';
import LaptopList from '../components/laptopList/LaptopList';
import PhoneList from '../components/phoneList/PhoneList';
import Section from '../components/Section';

const ProductsPage = ({products, addToCart}) => {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <Section title={language.section.phones}>
                <PhoneList phones={products.phones} addToCart={addToCart}/>
            </Section>
            <Section title={language.section.laptops}>
                <LaptopList laptops={products.laptops} addToCart={addToCart}/>
            </Section>
        </>
    );
};

export default ProductsPage;