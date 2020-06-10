import React from 'react'

const userOutput = (props) => {
    return (
        <div>
            <p>UserName: {props.userName}</p>
            <p>Please, change your user name as soon as possible</p>
        </div>
    )
}

export default userOutput