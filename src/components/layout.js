import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import {dark, light} from '../assets/theme';
import { navigate } from '@reach/router'
import { Button } from './global';
import AppContext from './AppContext'
import {FaLightbulb, FaArrowLeft} from 'react-icons/fa';
const Reset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
    border: 0;
    color: ${props => props.theme.text.color};
    font-family: 'arial';
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
    cursor: pointer;
    &:focus {
        outline: none;
    }
}
`

const Background = styled.div`
    min-height: 100vh;
    width: calc(100vw - 10%);   
    background-color: ${props => props.theme.background.backgroundColor};
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
    @media(min-width: 800px){
        width: calc(100vw - 30%);
        padding-top: 1%;
        padding-left: 15%;
        padding-right: 15%;
    }
`
const SwitchThemeBase = styled(Button)`
    position: fixed;
    top: 30px;
    right: 0;
    height: 30px;
    width: 30px;
    border-radius: 5px 0px 0px 5px;
    transition: all .2s ease-in-out;
    white-space: nowrap;
`
const SwitchTheme = styled(SwitchThemeBase)`
    &:hover {
        width: 100px;
        transition: all .2s ease-in-out;
    }
`
const GoHome = styled(Button)`
    position: fixed;
    top: 30px;
    left: 0px;
    height: 30px;
    width: 30px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
`
const ContentContainer = styled.div`
    padding-top: 75px;
`
const LightBulb = styled(FaLightbulb)`
    padding-top: 4px;
`
const HomeIcon = styled(FaArrowLeft)`
    padding-top: 3px;
`

const Layout = (props) => {
    const [location, setLocation] = useState(null);
    const [hovering, setHovering] = useState(false);
    const [windowSize, setWindowSize] = useState(1050);

    const {
        children,
        className,
        style
    } = props;

    const buttonGrow = () => {
        setHovering(true);
    }
    const buttonShrink = () => {
        setHovering(false);
    }

    useEffect(()=>{
        let currentLocation = window.location.pathname;
        let currentSize = window.innerWidth;
        setWindowSize(currentSize);
        setLocation(currentLocation);
        window.addEventListener('resize', (e)=>{
            setWindowSize(e.target.innerWidth);
        })

    },[])
    return(
    <AppContext.Consumer>
        {({theme, switchTheme}) => (
            <StyledThemeProvider theme={theme}  className={className} 
            style={style}{...props}>
                <>
                <Reset/>
                <Background>
                    {
                        windowSize > 1050 ?
                        <SwitchTheme onClick={()=>switchTheme()} onMouseEnter={buttonGrow} onMouseLeave={buttonShrink}>
                        {
                            hovering && theme === light ?
                            'Dark Theme'
                            : hovering && theme === dark ?
                            'Light Theme'
                            :
                            <LightBulb/>
                        }
                        </SwitchTheme>
                        :
                        <SwitchThemeBase onClick={()=>switchTheme()}>
                            <LightBulb/>
                        </SwitchThemeBase>    
                        
                    }
                    {
                        location !== '/' ?
                        <GoHome onClick={()=>{navigate('/')}}><HomeIcon/></GoHome>
                        :
                        <></>
                    }
                    <ContentContainer>
                        {children}
                    </ContentContainer>
                </Background>
                </>
            </StyledThemeProvider> 
        )}
    </AppContext.Consumer>
)}
export default Layout;