import React from 'react';
import data from '../../data';
import PhoneList from '../phoneList/PhoneList';

const Main = () => {
    return (
        <main>
            <PhoneList phones={data.phones}/>
        </main>
    );
};

export default Main;