import React from 'react'

const Layout = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
)

export default Layout