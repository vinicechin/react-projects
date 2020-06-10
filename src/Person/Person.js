import React from 'react'

import "./Person.css"

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>
            <p>{ props.children }</p>
            { props.changed && <input type="text" value={props.name} onChange={props.changed} /> }
        </div>
    )
}

export default person
