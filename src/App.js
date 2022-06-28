import logo from './logo.svg';
import './App.css';
import React from 'react';
import Count from './Count';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default App;

// TODO : Inclure le composant Count sous le logo