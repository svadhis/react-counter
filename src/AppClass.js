import logo from './logo.svg';
import './App.css';
import React from 'react';
import CountClass from './CountClass';

class AppClass extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <CountClass />
                </header>
            </div>
        );
    }
}

export default AppClass;