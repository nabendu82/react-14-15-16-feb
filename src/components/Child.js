import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <>
                            <h2>Child Component</h2>
                            <p>{user}</p>
                        </>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
