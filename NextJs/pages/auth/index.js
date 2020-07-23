import React from 'react'

import User from '../../components/User'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const AuthIndexPage = (props) => {
    return (
        <div>
            <h1>The auth index page - {props.appName}</h1>
            <User name="Vini" age={31} />
        </div>
    )
}

AuthIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "Server App (at Auth)" })
        }, 1000)
    })
    return promise
}
 
export default AuthIndexPage