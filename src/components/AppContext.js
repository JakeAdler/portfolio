import React, { useState, createContext } from 'react';
import {dark, light} from '../assets/theme';

const AppContext = createContext({
    theme: null, 
    switchTheme: null,
    hasVisitedIndex: false,
    setVisitedIndex: null,
});
const ContextProvider = ({children}) => {
    const [theme, setTheme] = useState(light);
    const [hasVisitedIndex, setVisitedIndex] = useState(false);
    const switchTheme = () => {
        let opposite;
        theme === light ?
        opposite = dark
        :
        opposite = light;
        setTheme(opposite);
  
    }
    return(
        <AppContext.Provider value={{
            theme, switchTheme, hasVisitedIndex, setVisitedIndex
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
export { ContextProvider }