import React, { useContext } from 'react'
import { LanguageContext } from '../../App';
import LanguageSwitcher from '../../languageSwitcher/LanguageSwitcher';
import { HeaderListContainer } from './HeaderListStyled';

const HeaderList = ({data}) => {
    const { language } = useContext(LanguageContext);

    return (
        <HeaderListContainer>
            <nav className='header-nav'>
                <ul className='header-list'>
                    {data.header.map((item) => (
                        <li className='header-list_item' key={item}>
                            {language.navigation[item]}
                        </li>
                    ))}
                </ul>
            </nav>
            <LanguageSwitcher/>
        </HeaderListContainer>
    );
};

export default HeaderList;