import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { LanguageSwitcherContainer } from './LanguageSwitcherStyled';
import sprite from '../../icons/header/sprite.svg';
const LanguageSwitcher = () => {
    const {setCurrentLang, languagesList} = useContext(LanguageContext)

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
                {languagesList.map((language) => (
                    <option value={language} key={language}>
                        {language}
                    </option>
                ))}
            </select>
        </LanguageSwitcherContainer>
    );
};

export default LanguageSwitcher;