import React from 'react'
import classNames from 'classnames'

import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    const backDropClasses = classNames({
        [classes.SideDrawer]: true,
        [classes.Close]: !props.open,
        [classes.Open]: props.open,
    })
    
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={backDropClasses} >
                <Logo height="11%" />
                <nav style={{ marginTop: '32px' }} >
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </div>
        </>
    )
}
 
export default SideDrawer