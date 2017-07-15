import React, {Component} from "react";
import Link from "../components/Link";
import {Row, Col, Grid} from "react-flexbox-grid";
import "../App.css";
import BrandLogo from "../components/BrandLogo";

class TopBar extends Component {


    render() {
        return (
            <div className="top-bar-container">
                <Grid fluid className="top-bar">
                    <Row>
                        <Col xs={4}>
                            <Row start="xs">
                                <div className="navigation">
                                    <Link linkAnchor="about" linkName="About us"/>
                                </div>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <div className="navigation">
                                <Row center="xs">
                                    <BrandLogo/>
                                </Row>
                            </div>

                            <div className="mobile-navigation">
                                <Row center="xs">
                                    <Link linkName="Menu"/>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="navigation">
                                <Row end="md">
                                    <Col>
                                        <Link linkAnchor="logos" linkName="Logos" isActive={true}/>
                                    </Col>
                                    <Col>
                                        <Link linkAnchor="graphics" linkName="Graphics"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export {TopBar}