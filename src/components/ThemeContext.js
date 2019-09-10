import React, { useState, createContext } from 'react';
import {dark, light} from '../assets/theme';

const {Provider, Consumer} = createContext({theme: null, switchTheme: null});

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
        <Provider value={{
            switchTheme: switchTheme,
            theme: theme
        }}>
            {children}
        </Provider>
    )
}

const ThemeConsumer = Consumer;

export { ThemeProvider, ThemeConsumer }