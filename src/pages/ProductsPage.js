import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../components/App';
import { productsRoutes } from '../routes/productsRoutes';

const ProductsPage = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div>
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
        </div>
    );
};

export default ProductsPage;