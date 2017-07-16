import React, {Component} from 'react';
import {TopBar} from './views/TopBar'
import './App.css';
import './global';
import MainBody from "./views/MainBody";
import About from "./views/About"
import metalist from "./resources/metalist";
import MetaContent from "./views/MetaContent";
import MobileMenu from "./views/MobileMenu";
import Social from "./components/Social";
import {Switch, Route} from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {mobileNavOpen: false};
        this.toggleMobileNav = this.toggleMobileNav.bind(this);
    }

    toggleMobileNav() {
        console.log("toggled");
        this.setState({mobileNavOpen: !this.state.mobileNavOpen})
    }


    render() {
        return (
            <div>
                <MobileMenu toggleMenu={this.toggleMobileNav} toggled={this.state.mobileNavOpen}/>
                <TopBar toggle={this.toggleMobileNav}/>
                <Switch>
                    <Route exact path="/" component={MainBody}/>
                    <Route exact path="/logos" component={MainBody}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
                <MetaContent metaList={metalist}/>
                <Social/>
            </div>
        );
    }
}

export default App;
