import React, {Component} from "react";
import PropTypes from "prop-types";


class Meta extends Component {

    render() {
        return (
            <div className="meta">
                <h4>{this.props.title}</h4>
                <h3>{this.props.body}</h3>
            </div>
        );
    }
}


Meta.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};


export default Meta
