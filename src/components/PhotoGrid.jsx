import React, {Component} from "react";
import Graphic from "./Graphic";
import StackGrid from "react-stack-grid";
import PropTypes from "prop-types";

class PhotoGrid extends Component {

    renderGallery() {
        return this.props.photos.map((item, index) => {
            return <Graphic imageSrc={item.image} key={index}/>
        })
    }


    render() {
        return (
            <StackGrid columnWidth="50%" className="gallery-grid">
                {this.renderGallery()}
            </StackGrid>
        )
    }
}

PhotoGrid.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotoGrid