import React, { useState, createContext } from 'react';
import {dark, light} from '../assets/theme';

const ThemeContext = createContext({theme: null, switchTheme: null});
const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(light);
    const switchTheme = () => {
        let opposite;
        theme === light ?
        opposite = dark
        :
        opposite = light;
        setTheme(opposite);
    }
    return(
        <ThemeContext.Provider value={{
            theme, switchTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
export { ThemeProvider }