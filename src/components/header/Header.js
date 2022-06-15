import React from 'react'
import HeaderList from './headerList/HeaderList';
import sprite from '../../icons/header/sprite.svg';
import { HeaderContainer } from './HeaderStyled';

const Header = () => {
    return (
        <HeaderContainer>
            <a className='header-logo' href='#'>
                <svg className='header-logo_icon'>
                    <use className='header-logo_menu' href={sprite + '#icon-menu'}/>
                </svg>
            </a>
            <HeaderList/>
        </HeaderContainer>
    );
};

export default Header;