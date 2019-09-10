import React from 'react';
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { Button  as BaseButton} from './global';

const Box = styled.div`
    width: 592px;
    min-height: 100px;
    background-color: #fff;
    padding: 16px;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-sizing: border-box;
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
    font-size: 1.25rem;
    color:#24292e;
    margin-bottom: 10px;
`
const Description = styled.p`
    color: #586069;
    height: 20px;
    margin-right: 16px;    
`
const Circle = styled.div`
    margin-top: 2px;
    margin-right: 10px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${props => props.circle ? props.cirlce : 
    '#f1e05a'};
`
const Updated = styled.p`
    color: #586069;
`
const Stars = styled(FaStar)`
    padding-bottom: 3px;
    margin-right: 3px;
`
const StarsContainer = styled.div` 
    display: flex;
    align-items: center;
    margin-right: 16px; 
    color: #586069;
`
const StarButton = styled.button`
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
`

const WorkCard = (props) => {
    const {
        title,
        description,
        language,
        stars,
        link,
        updated,
        circleBg
    } = props;
    return(
        <Box>
            <Flex dir='row' justify='space-between'>
                <Flex dir='column' justify='space-between' >
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Flex dir='row'  justify='space-between'
                    style={{marginTop: '10px'}}>
                        <Circle circle={circleBg}/> 
                        <Description >{language}</Description>
                        <StarsContainer> <Stars/>{stars}</StarsContainer>
                        <Updated>Updated {updated}</Updated>
                    </Flex>
                </Flex>
                <Flex dir='column'>
                    <StarButton>
                        <StarsContainer style={{marginRight: '0px', color: '   #24292e'}}>
                            <Stars/>
                            <p style={{color: '#24292e'}}>Star</p>
                        </StarsContainer>
                        </StarButton>
                </Flex>
            </Flex>
        </Box>
    )
}
export default WorkCard;