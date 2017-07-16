import React, {Component} from "react";
import PhotoGrid from "../components/PhotoGrid";
import {logos} from "../resources/graphics";

class MainBody extends Component {

    render() {
        return (
            <div className="main-body">
                <div className="preface-container">
                    <h1>DESIGN IS HARD</h1>
                    <p className="support-text">Let us do it right for you. And be surprised.</p>
                </div>

                <PhotoGrid photos={this.props.images || logos}/>
            </div>
        )
    }
}

export default MainBody
