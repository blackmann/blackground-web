import React, {Component} from "react";
import {Row, Col, Grid} from "react-flexbox-grid";
import blackground from "../gallery/blackground_design.jpg";
import team from "../resources/team";
import Graphic from "../components/Graphic";

class About extends Component {

    static getProfile(profile, index) {
        return (
            <Row key={index}>
                <Col md={12}>
                    <Row center="md">
                        <Col md={6}>
                            <Graphic imageSrc={profile.profileImage}/>
                        </Col>
                    </Row>
                    <Row center="md">
                        <Col md={6}>
                            <h3>{profile.name}</h3><br/>
                            <em>{profile.position}</em>
                            <p>{profile.bio}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    static getProfilesView() {
        return team.map((item, index) => {
            return About.getProfile(item, index);
        })
    }

    render() {
        return (
            <div className="main-body">
                <div className="preface-container">
                    <img alt="" className="responsive-image" src={blackground}/>
                    <h1>We are a team of Creative Designers</h1>
                    <Grid fluid>
                        {About.getProfilesView()}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default About