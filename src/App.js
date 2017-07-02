import React, {Component} from 'react';
import {TopBar} from './views/TopBar'
import './App.css';
import MainBody from "./views/MainBody";
import metalist from "./resources/metalist";
import MetaContent from "./views/MetaContent";

class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <MainBody/>
                <MetaContent metaList={metalist}/>
            </div>
        );
    }
}

export default App;
