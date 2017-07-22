import React, {Component} from "react";
import {Row, Col, Grid} from "react-flexbox-grid";
import blackground from "../gallery/visual-01.jpg";
import blackgroundColor from "../gallery/blackground_colored.jpg";
import team from "../resources/team";
import Graphic from "../components/Graphic";

class About extends Component {

    static getProfile(profile, index) {
        return (
            <Row key={index}>
                <Col md={12} className="member">
                    <Row center="md">
                        <Col md={6}>
                            <Graphic imageSrc={profile.profileImage}/>
                        </Col>
                    </Row>
                    <Row center="md">
                        <Col md={6} className="member-profile">
                            <h3>{profile.name}</h3>
                            <p><em>{profile.position}</em></p>
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
                    <h1>About us</h1>
                    <img alt="" src={blackgroundColor} className="responsive-image"/>
                    <p><strong>Blackground Labs</strong> is a team of creative designers that focuses
                        on providing quality branding services for start-ups. We offer the best of
                        graphics design and software solutions with enterprise standards. We are currently
                     located in Germany and Ghana, but our services are provided internationally.</p>
                    <img alt="" className="responsive-image" src={blackground}/>
                    <h1>What we do</h1>
                    <Row center="xs">
                        <Col>
                        <ul>
                            <li>Graphic Design</li>
                            <li>Logo & Branding</li>
                            <li>Web Design</li>
                            <li>Product Packaging</li>
                            <li>Mobile Applications</li>
                            <li>Desktop Application</li>
                        </ul>
                        </Col>
                    </Row>
                    <h1>The Team</h1>
                    <Grid fluid>
                        {About.getProfilesView()}
                    </Grid>
                    <a className="blink" href="mailto:yarteydegreat2@gmail.com"><h1>Email Us</h1></a>
                </div>
            </div>
        );
    }
}

export default About