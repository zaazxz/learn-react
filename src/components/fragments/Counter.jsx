import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        // Checking the constructor
        console.log("Constructor");

    }

    componentDidMount() {
        this.setState({ count: 1 })

        // Checking the componentDidMount
        console.log("Mounted");

    }

    componentDidUpdate(prevProps, prevState) {

        // Checking the componentDidUpdate
        console.log("Updated");

        if (this.state.count === 10) {
            this.setState({ count: 0 })
        }

    }

    render() {
        return (
            <div className='flex items-center'>
                <h1 className='mr-5'>{this.state.count}</h1>
                <button className='bg-black text-white p-3' onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>

                {/* Checking the render */}
                {console.log("Rendered")}

            </div>
        )
    }
}

export default Counter