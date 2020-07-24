import React from 'react'
import classNames from 'classnames'

import './Backdrop.css';

const backdrop = (props) => {
    const backdropClasses = classNames({
        'Backdrop': true,
        'BackdropOpen': props.show,
        'BackdropClosed': !props.show
    })

    return <div className={backdropClasses}></div>
}

export default backdrop