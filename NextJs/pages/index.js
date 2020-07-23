import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/Router'

class IndexPage extends Component {
    static async getInitialProps(context) {
        // console.log(context)
        return {appName: 'Server App'}
    }

    render() {
        return (
            <div>
                <h1>The main page of {this.props.appName}</h1>
                <p>Go to <Link href="/auth" ><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')} >Go to Auth</button>
            </div>
        )
    }
}
 
export default IndexPage