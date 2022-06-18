import { useEffect, useState } from 'react';
import { languages } from '../languages';

const LanguageHook = () => {
    const getLocalLanguage = () => 
        JSON.parse(localStorage.getItem("language")) || "english";
        
    const [currentLang, setCurrentLang] = useState(getLocalLanguage());
    
    useEffect(() => {
        localStorage.setItem("language", JSON.stringify(currentLang));
    }, [currentLang]);

    const languagesList = Object.keys(languages);

    return [currentLang, setCurrentLang, languagesList];
};

export default LanguageHook;

