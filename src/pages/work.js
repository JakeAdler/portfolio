import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import BaseWorkCard from '../components/WorkCard';

const Container = styled.div`
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const WorkCard = styled(BaseWorkCard)`
    margin-top: 10px;
    margin-bottom: 10px;
`

const WorkPage = () => {
    return(
        <Layout>
            <Container>
              
                    <>
                    <WorkCard title='boilerlib'
                    sourceCode="https://github.com/JakeAdler/boilerlib"
                    liveLink="https://www.npmjs.com/package/boilerlib"
                    description='☕A collection of modern, lightweight boilerplates and a tiny CLI to use them.'
                    stars='2'
                    language='Javascript'
                    updated='September 3'/>

                    <WorkCard title="batch-c"
                    language='Javascript'
                    updated="September 10"
                    description="📦 Batch convert images while maintaining file structure."/>
                    <WorkCard title="primal-ui"
                    language="Javascript"
                    updated="September 22"
                    description="React primitive components with opinionated (better) defaults."
                    sourceCode="https://github.com/JakeAdler/primal-ui"/>
                    </>
               
            </Container>
        </Layout>
    )
}
export default WorkPage