import React from "react"
import styled from 'styled-components';
import { Link as BaseLink } from "gatsby";
import AppContext from '../components/AppContext';
import BaseLayout from '../components/Layout';
import 'animate.css';

const Layout = styled(BaseLayout)`
  text-align: center;
`
const TextContainer = styled.div`
  padding-top: 10%;
  width: 100%;
  text-align: center;
`
const Title = styled.h1`  
  font-weight: 400;
  display: inline-block;
`
const Links = styled.ol`
   padding-top: 10%;
`
const Link = styled(BaseLink)`
  display: block;
  text-decoration: none;
  padding: 8px;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover{
    font-size: 1.75rem;
    margin-top: 3%;
    margin-bottom: 3%;
    transition: all .2s ease-in-out;
  }
  `

const IndexPage = () => {
  return(
  <Layout>
    <TextContainer>
      <AppContext.Consumer>
        {({hasVisitedIndex, setVisitedIndex})=>{
          if (!hasVisitedIndex) {
            setTimeout(() => {
              setVisitedIndex(true);
            }, 2500);
          } 
          return(
            <>
            <Title className={hasVisitedIndex ? '' :  'animated rotateInUpLeft'} style={{animationDelay: '1800ms'}}>Jake Adler</Title>
            <Links>
              <Link to='/about' className={hasVisitedIndex ? '': 'animated flipInX'} style={{animationDelay: '350ms'}}>
                  About
                </Link>
              <Link to='/work'  className={hasVisitedIndex ? '': 'animated flipInX'} style={{animationDelay: '650ms'}}>
                  Work
              </Link>
              <Link to='/contact'  className={hasVisitedIndex ? '': 'animated flipInX'} style={{animationDelay: '950ms'}}>
                  Contact
              </Link>
             </Links>
            </>
          )
        }}
       </AppContext.Consumer>
    </TextContainer>
  </Layout>
  )
}

export default IndexPage
