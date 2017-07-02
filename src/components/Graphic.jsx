import React, {Component} from "react";
import VisibilitySensor from "react-visibility-sensor";
import Img from "react-image";
import PropTypes from "prop-types";

class Graphic extends Component {

    render() {
        return (
            <div>
                <VisibilitySensor>
                    <Img alt="" src={this.props.imageSrc} className="responsive-image"/>
                </VisibilitySensor>
            </div>
        );
    }
}


Graphic.propTypes = {
    imageSrc: PropTypes.string.isRequired
};

export default Graphic