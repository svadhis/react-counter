import React from "react";

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
                <p></p>
                <button onClick={}>Increment</button>
                <Greeting />
            </div>
        );
    }
}

// TODO : Importer le composant Greeting
// TODO : Initialiser le state "count" à 0 dans le constructeur
// TODO : Implémenter le code de la fonction increment() afin qu'il incrémente le state "count"
// TODO : Afficher le contenu de "count" dans la première balise <p>
// TODO : Appeler la fonction increment() au clic du bouton
// TODO : Passer le state "count" au composant Greeting sous forme de prop