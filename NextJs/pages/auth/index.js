import React from 'react'

import User from '../../components/User'

const AuthIndexPage = () => {
    return (
        <div>
            <h1>The auth index page</h1>
            <User name="Vini" age={31} />
        </div>
    )
}
 
export default AuthIndexPage