import React from 'react'

import { Content } from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
    <>
        <Toolbar />
        <SideDrawer />
        <main className={Content}>
            {props.children}
        </main>
    </>
)

export default Layout