import React, {useState} from 'react';
import styled from 'styled-components';
import BaseLayout from '../components/Layout';
import { Button, Input as BaseInput } from '../components/global';


const Layout = styled(BaseLayout)`
    text-align: center;
`
const Title = styled.h1`
    text-align: center;
    padding-top: 8%;
`
const Form = styled.form`
    padding-top: 5%;
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FormRow = styled.div`
    width: 200px;
    padding-top: 12px;
    padding-bottom: 12px;
    vertical-align: middle;
`
const Input = styled(BaseInput)`
    margin-top: 5px;
`
const Submit = styled(Button)`
    margin: 20px auto;
`
const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return(
        <Layout>
            <Title>Drop a line.</Title>
            <Form> 
                <FormRow>
                    <label>Name </label>
                    <Input type='text' value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                </FormRow>
                <FormRow>
                    <label>Email </label>
                    <Input type='text' value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </FormRow>
                <FormRow>
                    <label for='message'>Message </label>
                    <Input as='textarea' id='message' rows='6' value={message}
                    onChange={(e)=>setMessage(e.target.value)}/>
                </FormRow>
                <Submit>Submit</Submit>
            </Form>
        </Layout>
    )
}
export default ContactPage;