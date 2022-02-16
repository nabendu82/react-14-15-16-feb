import React from 'react'

const Greeting = (props) => {
    const { name, children } = props;
    
    return (
        <>
            <h1>Welcome {name}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greeting