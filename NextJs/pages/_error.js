import React from 'react'
import Link from 'next/link'

const errorPage = () => {
    return (
        <div>
            <h1>Oops, this page does not exist.</h1>
            <p>try going back to the <Link href="/" ><a>initial page</a></Link></p>
        </div>
    )
}
 
export default errorPage