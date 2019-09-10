import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import WorkCard from '../components/WorkCard';

const Container = styled.div`
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WorkPage = () => {
    return(
        <Layout>
            <Container>
                <WorkCard title='boilerlib'
                description='hello world'
                stars='2'
                language='Javascript'
                updated='August 23'/>
            </Container>
        </Layout>
    )
}
export default WorkPage