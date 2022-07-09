import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setPhones } from '../../redux/products/productsActions';
import { getAllProductsByCategoryOperation } from '../../redux/products/productsOperations';
import { LanguageContext } from '../App';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = () => {
    const { language } = useContext(LanguageContext);

    const phones = useSelector((state)=> state.products.items.phones);
    const dispatch = useDispatch();

    //! async redux
    useEffect(() => {
        dispatch(getAllProductsByCategoryOperation('phones', setPhones));
    }, [dispatch]);

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
            <button type='button' onClick={goBack}>
                &laquo;
                {language.productItem.goBackBtn}
            </button>
            <ul>
                {phones.map((phone) => (
                    <PhoneListItem 
                        phone={phone} 
                        key={phone.id} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default PhoneList;