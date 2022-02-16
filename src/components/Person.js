import React from 'react'
import './Person.css'
import styled from 'styled-components'

const paraStyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    margin: 1em;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Person = ({ person }) => {
    return (
        <Wrapper>
            <h1 className='header'>Name: {person.name}</h1>
            <p style={paraStyled}>Age: {person.age}</p>
            <p style={{ color: 'white', backgroundColor: 'blue',   padding: '5px'}}>Skills: ReactJS</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    )
}

export default Person