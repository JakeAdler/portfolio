import React from "react"
import styled from 'styled-components';
import { Link as BaseLink } from "gatsby";
import BaseLayout from '../components/Layout';

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
      <Title>Jake Adler</Title>
       <Links>
         <Link to='/about'>About</Link>
         <Link to='/work'>Work</Link>
         <Link to='/contact'>Contact</Link>
       </Links>
    </TextContainer>
  </Layout>
  )
}

export default IndexPage
