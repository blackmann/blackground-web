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
                                <a>About us</a>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Row center="xs">
                                <BrandLogo/>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Row end="xs">
                                <Col>
                                    <Link linkAnchor="gallery" linkName="Gallery" isActive={true}/>
                                </Col>
                                <Col>
                                    <Link linkAnchor="portfolio" linkName="Portfolio"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export {TopBar}