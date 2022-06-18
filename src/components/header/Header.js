import React, { useEffect, useState } from 'react'
import HeaderList from './headerList/HeaderList';
import sprite from '../../icons/header/sprite.svg';
import { HeaderContainer } from './HeaderStyled';
import Modal from '../modal/Modal';
import data from '../../data';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const headerState = {
    width: window.innerWidth,
    breakPoint: 767,
    isModalOpen: false,
};

const Header = () => {
    const [header, setHeader] = useState(headerState);

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    });

    const handleResizeWindow = () => {
        if(header.width > 768) {
            setHeader((prev) => ({
              ...prev,
              width: window.innerWidth,
              isModalOpen: false
            }));
            return;
        };
        setHeader((prev)=> ({
            ...prev,
            width: window.innerWidth
        }));
    };

    const toggleModal = () => {
        setHeader((prev) => ({
            ...prev,
            isModalOpen: !prev.isModalOpen,
        }));
    };

    return (
        <HeaderContainer>
            {header.breakPoint < header.width ? 
                <HeaderList data={data}/> :
                <div className='header-logo'>
                    <svg className='header-logo_icon' onClick={toggleModal}>
                        <use className='header-logo_menu' href={sprite + '#icon-menu'}/>
                    </svg>
                </div>
            }
            {(header.isModalOpen && header.width < 768) &&
                <Modal closeModal={toggleModal}>
                    <HeaderList data={data}/>
                    <LanguageSwitcher/>
                </Modal>
            }
        </HeaderContainer>
    );
};

export default Header;