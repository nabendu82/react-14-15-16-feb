import React, { Component } from 'react'
import Child from './Child'
import UserContext from './userContext'

class Parent extends Component {
    static contextType = UserContext

    render() {
        return (
            <>
                <h3>Parent Component - {this.context}</h3>
                <Child />
            </>
        )
    }
}

export default Parent
