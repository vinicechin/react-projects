import React from 'react'
import classNames from 'classnames'
import * as TransitionStatus from 'react-transition-group/Transition'

import './Modal.css';

const modal = (props) => {
    const modalClasses = classNames({
        'Modal': true,
        'ModalOpen': props.show === TransitionStatus.ENTERING,
        'ModalClosed': props.show === TransitionStatus.EXITING
    })

    return (
        <div className={modalClasses}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    )
}

export default modal