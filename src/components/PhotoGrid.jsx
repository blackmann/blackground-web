import React, {Component} from "react";
import Graphic from "./Graphic";
import {Col, Row} from "react-flexbox-grid";
import PropTypes from "prop-types";


class PhotoGrid extends Component {

    getCol(position) {
        let _photo = this.props.photos[position];
        return (
            <Col md className="grid-item">
                <Graphic imageSrc={_photo.image}/>
                <h5 className="image-title">{_photo.title}</h5>
            </Col>
        )
    }

    renderGallery() {
        let views = [];
        let photosCount = this.props.photos.length;
        for (var i = 0; i < photosCount; i++) {
            // create row containing just two elements
            let firstColumn = this.getCol(i++);

            let secondColumn = <Col xs/>;

            if (i< photosCount) {
                secondColumn = this.getCol(i)
            }

            let row =
                (<Row key={i}>
                    {firstColumn}
                    {secondColumn}
                </Row>);

            views.push(row);
        }

        return views;
    }


    render() {
        return (
            <div className="gallery-grid">
                {this.renderGallery()}
            </div>
        )
    }
}

PhotoGrid.propTypes = {
    photos: PropTypes.array.isRequired
};

export default PhotoGrid