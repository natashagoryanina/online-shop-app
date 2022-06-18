import React, { useContext } from 'react';
import LanguageHook from '../../hooks/LanguageHook';
import { LanguageContext } from '../App';

const LanguageSwitcher = () => {
    //const [, setLanguage, languageList] = LanguageHook();
    const {setCurrentLang, languagesList} = useContext(LanguageContext)

    const onHandleChange = (e) => {
        setCurrentLang(e.target.value);
    };

    return (
        <select onChange={onHandleChange}>
            {languagesList.map((language) => (
                <option value={language} key={language}>
                    {language}
                </option>
            ))}
        </select>
    );
};

export default LanguageSwitcher;