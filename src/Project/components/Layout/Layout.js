import React, { Component } from 'react'

import { Content } from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout