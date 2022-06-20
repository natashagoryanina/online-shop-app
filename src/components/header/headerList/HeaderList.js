import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../../routes/mainRoutes';
import { LanguageContext } from '../../App';
import LanguageSwitcher from '../../languageSwitcher/LanguageSwitcher';
import { HeaderListContainer } from './HeaderListStyled';

const HeaderList = () => {
    const { language } = useContext(LanguageContext);

    return (
        <HeaderListContainer>
            <nav className='header-nav'>
                <ul className='header-list'>
                    {mainRoutes.map((item) => (
                        <li className='header-list_item' key={item.path}>
                            <NavLink
                                to={item.path} 
                                exact={item.exact}
                                className={({ isActive }) => (isActive ? "header-list_link-active" : "header-list_link")}
                            >
                                {language.navigation[item.name]}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <LanguageSwitcher/>
        </HeaderListContainer>
    );
};

export default HeaderList;