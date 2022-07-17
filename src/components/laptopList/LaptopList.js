import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setLaptops } from '../../redux/products/productsActions';
import { getAllProductsByCategoryOperation } from '../../redux/products/productsOperations';
import { laptopsSelector, productsLoaderSelector } from '../../redux/products/productsSelectors';
import { LanguageContext } from '../App';
import Loader from '../loader/Loader';
import LaptopListItem from './laptopListItem/LaptopListItem';

const LaptopList = () => {
    const { language } = useContext(LanguageContext);

    const laptops = useSelector(laptopsSelector);
    const isLoading = useSelector(productsLoaderSelector);
    const dispatch = useDispatch();

    //! async redux
    useEffect(() => {
        dispatch(getAllProductsByCategoryOperation('laptops', setLaptops));
    }, [dispatch]);

    //! redux
    // useEffect(() => {
    //     getProductsByCategory('laptops').then(laptops => 
    //         laptops && setLaptops(laptops));
    // }, [setLaptops])

    let navigate = useNavigate();

    const goBack = () => {
        navigate('/products')
    };

    return (
        <div>
            {isLoading ? <Loader/> : 
                <>
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
                </>
            }
        </div>
    );
};

export default LaptopList;