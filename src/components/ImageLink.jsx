import React, {Component} from "react";
import PropTypes from "prop-types";


class ImageLink extends Component {

    render() {
        return (
            <a href={this.props.linkAnchor}><img alt="" className="responsive-image link-icon" src={this.props.image}/></a>
        );
    }
}

ImageLink.propTypes = {
    image: PropTypes.object.isRequired,
    linkAnchor: PropTypes.string
}

export default ImageLink
