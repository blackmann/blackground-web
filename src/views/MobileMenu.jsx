import React, {Component} from "react";
import Dock from "react-dock";
import {Row, Col, Grid} from "react-flexbox-grid";
import BrandLogo from "../components/BrandLogo";
import Link from "../components/Link";
import ImageLink from "../components/ImageLink";
import PropTypes from "prop-types";

import fbIcon from "../gallery/fb.png";
import twitterIcon from "../gallery/twitter.png";
import instagramIcon from "../gallery/instagram.png";
import behanceIcon from "../gallery/behance.png";

class MobileMenu extends Component {

    getRow(child) {
        return (
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col sm={6}>{child}</Col>
                    </Row>
                </Col>
            </Row>
        );
    }

    getImageLink(icon, anchor) {
        return (
            <Col xs>
                <ImageLink image={icon} linkAnchor={anchor}/>
            </Col>
        );
    }

    render() {
        return (
            <Dock fluid={true} size={0.8} position="top" isVisible={this.props.toggled}>
                <Grid fluid className="mobile-navigation-container">
                    {this.getRow(<BrandLogo/>)}

                    {this.getRow(<Link linkAnchor="about" linkName="About"/>)}
                    {this.getRow(<Link linkAnchor="logos" linkName="Logos"/>)}
                    {this.getRow(<Link linkAnchor="graphics" linkName="Graphics"/>)}
                    {this.getRow(<Link linkAnchor="hire" linkName="Hire us"/>)}

                    <div className="social-icons-container">
                        <Row>
                            {this.getImageLink(fbIcon, "http://facebook.com/blackgroundofficial")}
                            {this.getImageLink(instagramIcon, "http://instagram.com/blackgroundlabs")}
                            {this.getImageLink(twitterIcon, "http://twitter.com/blackgroundlabs")}
                            {this.getImageLink(behanceIcon, "")}
                        </Row>
                    </div>

                    <div className="dock-exit">
                        {this.getRow(<a onClick={this.props.toggleMenu}>Close Menu</a>)}
                    </div>
                </Grid>
            </Dock>
        )
    }
}

MobileMenu.propTypes = {
    toggleMenu: PropTypes.func.isRequired
}

export default MobileMenu