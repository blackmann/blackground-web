import React, {Component} from "react";
import {Row, Col, Grid} from "react-flexbox-grid";

import socialAccount from "../resources/social-accounts"
import ImageLink from "./ImageLink";


class Social extends Component {

    static getRow(item, index) {
        return (
            <Row end="md" key={index}>
                {item}
            </Row>
        );
    }

    static getSocialLinks() {
        return socialAccount.map((item, index) => {
            return Social.getRow(<ImageLink className="md-social" image={item.icon} linkAnchor={item.href}/>, index)
        })
    }

    render() {
        return (
            <div className="social-links">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            {Social.getSocialLinks()}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Social
