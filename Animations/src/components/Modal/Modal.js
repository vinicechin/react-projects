import React from 'react'
import classNames from 'classnames'

import './Modal.css';

const modal = (props) => {
    const modalClasses = classNames({
        'Modal': true,
        'ModalOpen': props.show,
        'ModalClosed': !props.show
    })

    return (
        <div className={modalClasses}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    )
}

export default modal