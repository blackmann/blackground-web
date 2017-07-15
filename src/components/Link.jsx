import React, {Component} from "react";
import {Row, Col} from "react-flexbox-grid";
import ActiveUnderline from "./ActiveUnderline";
import PropTypes from "prop-types";

class Link extends Component {

    render() {
        let _link = <a onClick={this.props.onClick}
                   href={this.props.linkAnchor}>{this.props.linkName || this.props.linkAnchor}</a>;

        return (
            <Row center="xs" className="link">
                <Col>
                    {_link}<br/>
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

