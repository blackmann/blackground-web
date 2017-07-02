import React, {Component} from "react";
import StackGrid from "react-stack-grid";
import Graphic from "../components/Graphic";
import graphics from "../resources/graphics";

class MainBody extends Component {

    renderGallery() {
        return graphics.map((item, index) => {
            return <Graphic imageSrc={item.image} key={index}/>
        })
    }

    render() {
        return (
            <div className="main-body">
                <div className="preface-container">
                    <h1>DESIGN IS HARD</h1>
                    <p className="support-text">Let us do it right for you. And be surprised.</p>
                </div>

                <StackGrid columnWidth="50%" gutterWidth={10} className="gallery-grid">
                    {this.renderGallery()}
                </StackGrid>
            </div>
        )
    }
}

export default MainBody
