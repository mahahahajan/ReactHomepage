import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import './AboutMe.css';
import profImage from "../images/DSC_0831.jpg"



function AboutMe(props) {
    return (
        <div className="aboutMe">
            <div className="center">
                <div className="myRow setHeight">
                    <div className="leftCenter">
                        <h1 className="nameText">Hi, I'm Pulkit 😁</h1>
                        <h3> A programmer from the Bay. I'm a junior at the University of Texas Austin 🤘🏽, currently studying Electrical and Computer Engineering. 
                            When I'm not coding, I'm trying to learn tricks on my electric skateboard, binging Netflix (you can follow my progress here), playing video games, or hanging out with friends.
                        </h3>
                    </div>
                    <div className="rightCenter">
                        <Image src={profImage} className="profImg" rounded />
                    </div>
                </div>

            </div >
        </div>
    );
}

export default AboutMe;