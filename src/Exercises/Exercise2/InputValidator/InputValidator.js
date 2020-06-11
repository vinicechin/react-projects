import React from 'react';

const inputValidator = (props) => {
    return (
        <p>{ props.length < 5 ? "Text too short" : "Text long enouth" }</p>
    )
}

export default inputValidator