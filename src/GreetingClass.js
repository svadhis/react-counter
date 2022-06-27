import React from "react";

export default class GreetingClass extends React.Component {
    render() {
        return (
            <h1>I greet you {this.props.count} times</h1>
        );
    }
}