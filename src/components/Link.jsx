import React, {Component} from "react";
import PropTypes from "prop-types";

class Link extends Component {

    render() {
        return (
            <a href={this.props.linkAnchor}>{this.props.linkName || this.props.linkAnchor}</a>
        );
    }
}

Link.propTypes = {
    linkAnchor: PropTypes.string,
    linkName: PropTypes.string
};

export default Link

