import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello World'
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({ message: 'Hello JavaScript' })
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* <button onClick={this.handleClick}>Click</button> */}
                {/* <button onClick={() => this.handleClick()}>Click</button> */}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default EventBind
