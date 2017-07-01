import React, {Component} from 'react';
import {TopBar} from './views/TopBar'
import './App.css';
import MainBody from "./views/MainBody";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <MainBody/>
            </div>
        );
    }
}

export default App;
