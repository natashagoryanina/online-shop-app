import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart } from '../../redux/cart/cartActions';
import { setPhones } from '../../redux/products/productsActions';
import { getAllProductsByCategoryOperation } from '../../redux/products/productsOperations';
import { productsLoaderSelector, phonesSelector } from '../../redux/products/productsSelectors';
import { LanguageContext } from '../App';
import Loader from '../loader/Loader';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = () => {
    const { language } = useContext(LanguageContext);

    const phones = useSelector(phonesSelector);
    const isLoading = useSelector(productsLoaderSelector);
    const dispatch = useDispatch();

    //! async redux
    useEffect(() => {
        dispatch(getAllProductsByCategoryOperation('phones', setPhones));
    }, [dispatch]);

    const addProduct = (item) => dispatch(addToCart(item));

    //! redux
    // useEffect(() => {
    //     getProductsByCategory('phones').then(phones => 
    //         phones && setPhones(phones));
    // }, [setPhones])

    let navigate = useNavigate();

    const goBack = () => {
        navigate('/products');
    };

    return (
        <div>
            {isLoading ? <Loader/> : 
                <>
                    <button type='button' onClick={goBack}>
                        &laquo;
                        {language.productItem.goBackBtn}
                    </button>
                    <ul>
                        {phones.map((phone) => (
                            <PhoneListItem 
                                phone={phone} 
                                addProduct={addProduct}
                                key={phone.id} 
                            />
                        ))}
                    </ul>
                </>
            }
        </div>
    );
};

export default PhoneList;