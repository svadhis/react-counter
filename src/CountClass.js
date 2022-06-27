import React from "react";
import GreetingClass from "./GreetingClass";

export default class CountClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <GreetingClass count={this.state.count} />
            </div>
        );
    }
}