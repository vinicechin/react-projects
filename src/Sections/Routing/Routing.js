import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Blog from '../shared/components/Blog/Blog'

const Routing = () => {
    return (
        <BrowserRouter>
            <Blog />
        </BrowserRouter>
    )
}

export default Routing