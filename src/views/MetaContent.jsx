import React, {Component} from "react";
import PropTypes from "prop-types";
import Meta from "../components/Meta";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class MetaContent extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: 0};
        this.moveToNextMeta = this.moveToNextMeta.bind(this);
    }

    render() {
        if (this.props.metaList.length === 0) {
            return null;
        }

        let currentMeta = this.props.metaList[this.state.selected];
        return (
            <ReactCSSTransitionGroup transitionName="meta-transition"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
            <Meta title={currentMeta.title} body={currentMeta.body} key={this.state.selected}/>
            </ReactCSSTransitionGroup>
        );
    }

    moveToNextMeta() {
        let next = (this.state.selected + 1) % this.props.metaList.length;
        this.setState({selected: next});
    }

    componentDidMount() {
        setInterval(this.moveToNextMeta, 3000);
    }
}


MetaContent.propTypes = {
    metaList: PropTypes.array.isRequired
};

export default MetaContent