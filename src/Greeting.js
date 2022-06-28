import React from "react";

export default class Greeting extends React.Component {
    render() {
        return (
            <h1>I greet you {this.props.count}</h1>
        );
    }
}

// TODO : Utiliser la prop "count" dans le message. Ex: avec "count" à 3, le message affichera "I greet you 3 times"