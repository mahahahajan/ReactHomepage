import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './FeaturedProjects.css';
import v2SC from "../images/V2ScreenShot.png"



function FeaturedProjects(props) {
    return (
        <div className="featProj">
            <div className="center">
                <div className="featTitle">
                    <h2> Featured Projects </h2>
                </div>
                <div className="myRow setHeight">
                    <div className="leftFeatImg">
                        <Image src={v2SC} className="myImg" rounded />
                    </div>
                    <div className="rightFeatText">
                        <h1 className="projectTitle">V2</h1>
                        <h3> Designed and Developed mobile game app using Unity 3D. Published to both Google Play Store and App Store.
                        </h3>
                        <li className="skillsListItem" id="Music">
                            Produced Music and SFX
                        </li>
                        <li className="skillsListItem" id="Code">
                            Programmed all game behavior
                        </li>
                        <li className="skillsListItem" id="Design">
                            Designed UI/UX, VFX for game
                        </li>
                    </div>
                </div>
                <div className="myRow">
                    <div className="horizontalCenter">
                        <Button variant="success" block={true} size="lg" Link> <Link to="/Projects">View Others</Link></Button>{' '}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default FeaturedProjects;