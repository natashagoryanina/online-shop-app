import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { LanguageSwitcherContainer } from './LanguageSwitcherStyled';
import sprite from '../../icons/header/sprite.svg';

const LanguageSwitcher = () => {
    const {language, setCurrentLang, languagesList} = useContext(LanguageContext);

    const remainedLangList = languagesList.filter(lang => lang !== language.title);

    const onHandleChange = (e) => {
        setCurrentLang(e.target.value);
    };

    return (
        <LanguageSwitcherContainer>
            <div className='switch-lang'>
                <svg className='switch-lang_icon'>
                    <use href={sprite + '#icon-sphere'}/>
                </svg>
            </div>
            <select className='select-lang' onChange={onHandleChange}>
                <option value={language.title} key={language.title}>
                    {language.title}
                </option>
                {remainedLangList.map((language) => (
                    <option value={language} key={language}>
                        {language}
                    </option>
                ))}
            </select>
        </LanguageSwitcherContainer>
    );
};

export default LanguageSwitcher;