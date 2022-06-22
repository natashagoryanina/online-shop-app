import React, { createContext } from 'react'
import LanguageHook from '../hooks/LanguageHook';
import { languages } from '../languages';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './header/Header';
import Main from './main/Main';

export const LanguageContext = createContext();

const App = () => {
    const [currentLang, setCurrentLang, languagesList] = LanguageHook();
    
    return (
        <LanguageContext.Provider 
            value={{
                language: languages[currentLang],
                setCurrentLang,
                languagesList
            }}
        >
            <GlobalStyles/>
            <Header/>
            <Main/>
        </LanguageContext.Provider>
    );
};

export default App;