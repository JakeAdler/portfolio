import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const TextContainer = styled.div`
    padding-top: 8%;
    width: 50%;
    margin: 0 auto;
    text-align: center;
`

const AboutPage = () => {
    return(
        <Layout>
            <TextContainer>
                <h1>Hi</h1>
            </TextContainer>

        </Layout>
    )
}
export default AboutPage;