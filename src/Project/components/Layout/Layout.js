import React from 'react'

import { Content } from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => (
    <>
        <Toolbar />
        <main className={Content}>
            {props.children}
        </main>
    </>
)

export default Layout