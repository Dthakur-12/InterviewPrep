import React, { Component } from 'react'

class LifeCyclemethods extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Hello World!! Our component is successfully mounted");
    }
    componentDidUpdate() {
        console.log("Hello guys!! I am updated");
        alert("Updated");
    }

    componentWillUnmount() {
        console.log("Component is unmounted");
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>LifeCyclemethods:
                {/* <div>{this.state.count}</div> */}
                <div> <button onClick={() => { this.increment() }}>ClickMe!!</button>
                <div style={{color:'red'}}>{this.props.data}</div>
                </div>
            </div>
        )
    }
}

export default LifeCyclemethods