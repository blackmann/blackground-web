import React, {Component} from "react";
import {Row, Col} from "react-flexbox-grid";
import ActiveUnderline from "./ActiveUnderline";
import PropTypes from "prop-types";

class Link extends Component {

    render() {
        return (
            <Row center="xs" className="link">
                <Col>
                <a href={this.props.linkAnchor}>{this.props.linkName || this.props.linkAnchor}</a><br/>
                {this.props.isActive && <ActiveUnderline/>}
                </Col>
            </Row>
        );
    }
}

Link.propTypes = {
    linkAnchor: PropTypes.string,
    linkName: PropTypes.string,
    isActive: PropTypes.bool
};

export default Link

