import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    background-color: ${props => props.theme.button.backgroundColor};
    color: ${props => props.theme.button.color};
    border-radius: 5px;
    &:focus {
        outline: 0;
    }
`
const Input = styled.input`
    border: 1px solid ${props => props.theme.primary};
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
    vertical-align: middle;
    width: 200px;
    &:focus {
        outline: 0;
    }
`
const Anchor = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.text.color}
`
export { Button, Input, Anchor }