import React from 'react'

import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer} >
            <Logo height="11%" />
            <nav style={{ marginTop: '32px' }} >
                <NavigationItems />
            </nav>
        </div>
    )
}
 
export default SideDrawer