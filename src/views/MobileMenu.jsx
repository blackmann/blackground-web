import React, {Component} from "react";
import Dock from "react-dock";
import {Col, Grid, Row} from "react-flexbox-grid";
import BrandLogo from "../components/BrandLogo";
import Link from "../components/Link";
import ImageLink from "../components/ImageLink";
import PropTypes from "prop-types";

import socialAccounts from "../resources/social-accounts";

class MobileMenu extends Component {

    static getRow(child) {
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

    static getImageLink(icon, anchor, index) {
        return (
            <Col xs key={index}>
                <ImageLink image={icon} linkAnchor={anchor}/>
            </Col>
        );
    }

    static getSocialLinks() {
        return socialAccounts.map((item, index) => {
            return MobileMenu.getImageLink(item.icon, item.href, index)
        })
    }

    render() {
        return (
            <Dock fluid={true} size={0.8} position="top" isVisible={this.props.toggled}>
                <Grid fluid className="mobile-navigation-container">
                    {MobileMenu.getRow(<BrandLogo/>)}

                    {MobileMenu.getRow(<Link onClick={this.props.toggleMenu} linkAnchor="/about" linkName="About"/>)}
                    {MobileMenu.getRow(<Link onClick={this.props.toggleMenu} linkAnchor="/logos" linkName="Logos"/>)}
                    {MobileMenu.getRow(<Link onClick={this.props.toggleMenu} linkAnchor="/graphics" linkName="Graphics"/>)}
                    {MobileMenu.getRow(<Link onClick={this.props.toggleMenu} linkAnchor="/hire" linkName="Hire us"/>)}

                    <div className="social-icons-container">
                        <Row>
                            {MobileMenu.getSocialLinks()}
                        </Row>
                    </div>

                    <div className="dock-exit">
                        {MobileMenu.getRow(<a onClick={this.props.toggleMenu}>Close Menu</a>)}
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