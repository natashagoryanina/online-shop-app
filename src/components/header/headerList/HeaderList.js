import React from 'react'
import data from '../../../data';
import { HeaderListContainer } from './HeaderListStyled';

const HeaderList = () => {
    return (
        <HeaderListContainer>
             <ul className='header-list'>
                {data.header.map((item) => (
                    <li className='header-list_item'key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </HeaderListContainer>
    );
};

export default HeaderList;