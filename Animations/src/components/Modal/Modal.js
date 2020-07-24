import React from 'react'
import classNames from 'classnames'
import Transition from 'react-transition-group/Transition'
import * as TransitionStatus from 'react-transition-group/Transition'

import './Modal.css';

const modal = (props) => {
    return (
        <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
            {state => {
                const modalClasses = classNames({
                    'Modal': true,
                    'ModalOpen': state === TransitionStatus.ENTERING,
                    'ModalClosed': state === TransitionStatus.EXITING
                })

                return (
                    <div className={modalClasses}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                )
            }}
        </Transition>
    )
}

export default modal