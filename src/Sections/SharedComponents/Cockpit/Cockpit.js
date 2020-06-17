import React, { useEffect, useRef } from 'react'

import styles from './Cockpit.module.css'

const Cockpit = (props) => {
    // react hook that works like DidMount and DidUpdate in one
    // if second argument is an empty array, it will execute only once at the start
    // if there is no second argument, will always execute on any update
    useEffect(() => {
        // http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud')
        // }, 1000)

        // return used for clean-up -> runs after useEffect main content runs.
        // if [] as second argument, runs only when component is unmount
        // return () => {
        //     //clean up stuff
        //     clearTimeout(timer)
        // }
    }, [props.personsLength])

    useEffect(() => {
        toggleBtnRef.current.click()
    }, [])

    const toggleBtnRef = useRef(null)
    const classes = []
    let btnClass = ''

    if (props.showPersons) {
        btnClass = styles.Red
    }

    if (props.personsLength <= 2) {
      classes.push(styles.red)
      if (props.personsLength <= 1) classes.push(styles.bold)
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This should be styled dynamically</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default React.memo(Cockpit)