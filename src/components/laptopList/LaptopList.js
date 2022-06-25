import React, { useContext } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { setLaptops } from '../../redux/products/productsActions';
import { getProductsByCategory } from '../../services/api';
import { LanguageContext } from '../App';
import LaptopListItem from './laptopListItem/LaptopListItem';

const LaptopList = ({laptops, setLaptops}) => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        getProductsByCategory('laptops').then(laptops => 
            laptops && setLaptops(laptops));
    }, [setLaptops])

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
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    laptops: state.products.items.laptops
});

export default connect(mapStateToProps, {setLaptops})(LaptopList);