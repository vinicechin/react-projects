import React from 'react'

const userInput = (props) => {
    const style = {
        border: '1px solid #888',
        height: '22px',
        paddingLeft: '8px'
    }

    return (
        <input style={style} onChange={props.changed} value={props.userName} />
    )
}

export default userInput