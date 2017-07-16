import React, {Component} from "react";
import PropTypes from "prop-types";


class ImageLink extends Component {

    render() {
        let propClass = this.props.className;
        let classes = "responsive-image link-icon ";
        classes = propClass ? classes + propClass : classes;
        return (
            <a href={this.props.linkAnchor}><img alt="" className={classes} src={this.props.image}/></a>
        );
    }
}

ImageLink.propTypes = {
    image: PropTypes.object.isRequired,
    linkAnchor: PropTypes.string
}

export default ImageLink
