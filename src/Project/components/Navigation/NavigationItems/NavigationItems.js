import React from 'react'
import { withRouter } from 'react-router-dom'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} >
            <NavigationItem link={props.match.url} exact >Burger Builder</NavigationItem>
            { props.isAuth && <NavigationItem link={`${props.match.url}/orders`} >Orders</NavigationItem> }
            { props.isAuth
                ? <NavigationItem link={`${props.match.url}/logout`} >Logout</NavigationItem>
                : <NavigationItem link={`${props.match.url}/auth`} >Sign On</NavigationItem>
            }
        </ul>
    )
}

export default withRouter(NavigationItems)