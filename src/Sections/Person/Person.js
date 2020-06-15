import React from 'react'
import Radium from 'radium'

import "./Person.css"

const person = (props) => {
    const style = {
        '@media (min-width: 650px)': {
            width: '390px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>
            <p>{ props.children }</p>
            { props.changed && <input type="text" value={props.name} onChange={props.changed} /> }
        </div>
    )
}

export default Radium(person)
