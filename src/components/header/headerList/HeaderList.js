import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { authIsAuthSelector } from '../../../redux/auth/authSelectors';
import { mainRoutes } from '../../../routes/mainRoutes';
import { LanguageContext } from '../../App';
import LanguageSwitcher from '../../languageSwitcher/LanguageSwitcher';
import HeaderListItem from './headerListItem.js/HeaderListItem';
import { HeaderListContainer } from './HeaderListStyled';

const HeaderList = () => {
    const { language } = useContext(LanguageContext);
    const isAuth = useSelector(authIsAuthSelector);
   
    return (
        <HeaderListContainer>
            <nav className='header-nav'>
                <ul className='header-list'>
                    {mainRoutes.map((item) => (
                        <HeaderListItem 
                            path={item.path} 
                            name={item.name}
                            isPrivate={item.isPrivate}
                            isAuth={isAuth}
                            language={language}
                        />
                    ))}
                </ul>
            </nav>
            <LanguageSwitcher/>
        </HeaderListContainer>
    );
};

export default HeaderList;