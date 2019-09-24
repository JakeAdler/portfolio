import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components'
import { FaStar, FaGlobe, FaCode } from 'react-icons/fa'
import { Button  as BaseButton, Anchor as BaseAnchor} from './global';
const Box = styled.div`
    width: 500px;
    min-height: 100px;
    height: auto;
    background-color: #fff;
    padding: 16px;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-sizing: border-box;
    @media(min-width: 1000px) {    
        width: 900px;
    }
    @media(max-width: 500px) {
        width: 100vw;
    }
`
const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.dir};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    width: ${props => props.w};
    height: ${props => props.h};
`
const Title = styled.h2`
    display: inline-block;
    width: auto;
    font-size: 1.25rem;
    color:#24292e;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    &:hover {
        color: #0366d6;
    }
`
const Description = styled.p`
    color: #586069;
    height: 20px;
    margin-right: 16px;  
    display: inline-block; 
    @media(max-width: 400px) {
        padding: 3px 0;
    } 
`
const Circle = styled.div`
    margin-top: 6px;
    margin-right: 10px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${props => props.circle ? props.cirlce : 
    '#f1e05a'};
    display: inline-block;
`
const LangContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-wrap: nowrap;
`
const LinksContainer = styled.div`
    width: 100%;
    max-height: 30px;
    display: flex; 
    justify-content: space-around;
    padding: 0 5px;
    margin-bottom: 15px;
    box-sizing: border-box;
`
const Anchor = styled(BaseAnchor)`
    display: flex;
    height: auto;
    justify-content: space-between;
    align-items: center;
    flex-basis: auto;
`
const Updated = styled.p`
    font-size: 15px;
    color: #586069;
    white-space: nowrap;
`
const Stars = styled(FaStar)`
    padding-bottom: 3px;
    margin-right: 3px;
`
const StarsContainer = styled.div` 
    display: flex;
    align-items: center;
    margin-top: 2px;
    margin-right: 16px; 
    color: #586069;
`
const StarButton = styled(Anchor)`
    width: auto;
    height: 23px;
    padding: 3px 10px;  
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    color: #24292e;
    line-height: 20px;
    border: 1px solid rgba(27,31,35,.2);
    border-radius: .25em;
    background-size: 110% 110%;
    font-weight: 600;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media(max-width: 400px) {
        padding: 3px 5px;

    }
`

const WorkCard = (props) => {
    const {
        title,
        description,
        language,
        stars,
        liveLink,
        sourceCode,
        updated,
        circleBg,
        className,
        style
    } = props;
    const [linksUp, setLinksUp] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setLinksUp(true);
        }, 800);
    },[]);


    return(
        <Flex dir='column'>
            <Box className={`animated fadeInLeft ${className}`} style={{
                animationDuration: 300, ...style
            }}>
                <Flex dir='row' justify='space-between'>
                    <Flex dir='column' justify='space-between'>
                        <Title as="a" href={sourceCode}>
                            {title}
                        </Title>
                        <Description>{description}</Description>
                        <Flex dir='row'  justify='flex-start' align='center'
                        style={{marginTop: '10px',}}>
                            <LangContainer>
                                <Circle circle={circleBg}/> 
                                <Description >{language}</Description>
                            </LangContainer>
                            {
                                stars > 0 ?
                                <StarsContainer> <Stars/>{stars}</StarsContainer>
                                :
                                <></>
                            }
                            
                            <Updated>Updated {updated}</Updated>
                        </Flex>
                    </Flex>
                    <Flex dir='column'>
                        <StarButton as="a" href={sourceCode}>
                            <StarsContainer style={{marginRight: '0px', color: '   #24292e'}}>
                                <Stars/>
                                <p style={{color: '#24292e'}}>Star</p>
                            </StarsContainer>
                        </StarButton>
                    </Flex>
                </Flex>
            </Box>
            {
                linksUp ?
                <LinksContainer>
                    <Anchor href={sourceCode} className='animated flipInY'>
                        <FaCode style={{paddingRight: "5px"}}/> Source Code
                    </Anchor>
                    <Anchor href={liveLink} className='animated flipInY'>
                        <FaGlobe style={{paddingRight: "5px"}}/> Live Link
                    </Anchor>
                </LinksContainer>
                :
                <div style={{height: '30px'}}/>
            }
            
        </Flex>
    )
}
export default WorkCard;