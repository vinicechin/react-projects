import React from 'react'

import styles from "./Person.module.css"

const person = (props) => {
    // return [
    //     <p key="e1" onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>,
    //     <p key="e2">{ props.children }</p>,
    //     <input key="e3" type="text" value={props.name} onChange={props.changed} />
    // ]

    // return <>
    //     <p onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>
    //     <p>{ props.children }</p>
    //     <input type="text" value={props.name} onChange={props.changed} />
    // </>

    return <div className={styles.Person}>
        <p onClick={props.click}>I'm a { props.name }! and i am { props.age } years old</p>
        <p>{ props.children }</p>
        <input type="text" value={props.name} onChange={props.changed} />
    </div>
}

export default person
