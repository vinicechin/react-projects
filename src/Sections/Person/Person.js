import React from 'react'
import styled from 'styled-components'

// import "./Person.css"

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 650px) {
        width: 390px;
    }
`

const person = (props) => {
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>
            <p>{ props.children }</p>
            { props.changed && <input type="text" value={props.name} onChange={props.changed} /> }
        </StyledDiv>
    )
}

export default person
