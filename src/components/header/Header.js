import React from 'react'
import HeaderList from './headerList/HeaderList';
import sprite from '../../icons/header/sprite.svg';

const Header = () => {
    return (
        <header>
            <svg>
                <use href={sprite + '#icon-menu'}/>
            </svg>
            <HeaderList/>
        </header>
    );
};

export default Header;