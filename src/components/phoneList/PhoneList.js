import React, { useContext } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { setPhones } from '../../redux/products/productsActions';
import { getProductsByCategory } from '../../services/api';
import { LanguageContext } from '../App';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = ({phones, setPhones}) => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        getProductsByCategory('phones').then(phones => 
            phones && setPhones(phones));
    }, [setPhones])

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

const mapStateToProps = (state) => ({
    phones: state.products.items.phones
});

export default connect(mapStateToProps, {setPhones})(PhoneList);