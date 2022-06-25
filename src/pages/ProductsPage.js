import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../components/App';
import Section from '../components/Section';
import { productsRoutes } from '../routes/productsRoutes';

const ProductsPage = () => {
    const { language } = useContext(LanguageContext);

    return (
        <Section>
            <nav className='products-nav'>
                <ul className='products-list'>
                    {productsRoutes.map((item) => (
                        <li className='products-list_item' key={`/products${item.path}`}>
                            <NavLink
                                to={`/products${item.path}`}
                                className={({ isActive }) => (isActive ? "products-list_link-active" : "products-list_link")}
                            >
                                {language.productsNav[item.name]}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </Section>
    );
};

export default ProductsPage;