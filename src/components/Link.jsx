import React, {Component} from "react";
import {Col, Row} from "react-flexbox-grid";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


class Link extends Component {

    render() {
        let _link = <NavLink onClick={this.props.onClick} activeClassName="active-link"
                   to={this.props.linkAnchor}>{this.props.linkName || this.props.linkAnchor}</NavLink>;

        return (
            <Row center="xs" className="link">
                <Col>
                    {_link}
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

