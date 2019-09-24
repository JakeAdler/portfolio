import React, {  useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, {keyframes} from 'styled-components';
import Typed from 'typed.js';
import Layout from '../components/Layout';
import 'animate.css';

const FlexRow = styled.div`
    height: auto;
    width: 60%;
    margin: 0 auto;
    padding-top: 15%;
    display: flex;
    justify-content:flex-start;
    align-items: flex-start;
    @media(max-width: 1500px){
        width: 80%;
    }
    @media(max-width: 1000px){
        flex-direction: column;
        align-items: flex-start;
    }
`

const TextContainer = styled.div`
    height: inherit;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 15px;
    text-align: left;
    white-space: nowrap;
`
const WaveAnimation = keyframes`

    0% { transform: rotate(  0.0deg); }
    2% { transform: rotate(-10.0deg); }
    4% { transform: rotate( 12.0deg); }
    6% { transform: rotate(-10.0deg); }
    8% { transform: rotate(  9.0deg); }
    10% { transform: rotate(  0.0deg); }
    50% { transform: rotate(  0.0deg); }
    100% { transform: rotate(  0.0deg); }

`
const Wave = styled.span`
    animation-name: ${WaveAnimation};
    animation-duration: 5s;          
    animation-iteration-count: infinite;    
    transform-origin: 70% 70%;         
    display: inline-block;
`
const Descriptor = styled.h1`
    min-height: 32px;
`
const TechLabel = styled.h1`
    margin-bottom: 0px;
`
const TechRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 25px 0px;
    padding-left: 10px;
    width: 300px;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
        color: #0366d6;
    }
`
const TechImage = styled(Img)`
    margin-right: 15px;
`
const AboutPage = (props) => {
    useEffect(()=>{
        const descriptorsAll = [
            'full-stack developer', 'gamer', 'designer', 'dog-lover &#128021;'
        ]
        const descriptors = descriptorsAll.map((d)=> d + '.');
        const options = {
            strings: descriptors,
            showCursor: false,
            typeSpeed: 60,
            backSpeed: 60,
            backDelay: 2000,
            startDelay: 300,
            loop: true,
            loopCount: Infinity,
        }
        new Typed('#typed', options)
    }, []);
    const ImageQuery = useStaticQuery(graphql`
    query {
        allImageSharp {
            edges {
            node {
                fixed(width: 50) {
                    originalName
                    ...GatsbyImageSharpFixed
                }
            }
            }
        }
    }`
    )

    let images = {}
    ImageQuery.allImageSharp.edges.forEach(
        ({node}) => {
            const {originalName, ...GatsbyImageSharpFixed} = node.fixed;
            images[`${originalName}`] = GatsbyImageSharpFixed;
        }
    );
    return(
        <Layout>
            <FlexRow>
                <TextContainer>
                    <h1>Hi <Wave>👋</Wave> I'm Jake, I'm a</h1>
                    <Descriptor id='typed'></Descriptor>
                </TextContainer>
                <TextContainer> 
                    <TechLabel>Tech that I like:</TechLabel>
                    <TechLabel as='h3'>(September 2019)</TechLabel>
                    <ul>
                        <a href="https://www.gatsbyjs.org/">
                            <TechRow>
                                <TechImage fixed={images['gatsby-icon.png']}/>
                                Gatsby
                            </TechRow>
                        </a>
                        <a href="https://www.styled-components.com/">
                            <TechRow>
                                <TechImage fixed={images['styled-icon.png']} style={{backgroundColor: '#000'}}/>
                                Styled Components
                            </TechRow>
                        </a>
                        <a href="https://firebase.google.com/">
                            <TechRow>
                                <TechImage fixed={images['firebase-icon.png']}/>
                                Firebase
                            </TechRow>
                        </a>
                    </ul>
                </TextContainer>
            </FlexRow>
        </Layout>
    )
}
export default AboutPage;