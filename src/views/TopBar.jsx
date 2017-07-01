import React, {Component} from "react";
import Link from "../components/Link";
import "../App.css";
import BrandLogo from "../components/BrandLogo";

class TopBar extends Component {

    render() {
        return (
            <div className="top-bar-container">
                <div className="top-bar">
                    <a>About us</a>
                    <BrandLogo/>
                    <ul>
                        <li>
                            <Link linkAnchor="gallery" linkName="Gallery"/>
                        </li>
                        <li>
                            <Link linkAnchor="portfolio" linkName="Portfolio"/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export {TopBar}