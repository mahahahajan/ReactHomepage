import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button } from 'react-bootstrap';
import './MyFooter.css';
import v2SC from "../images/V2ScreenShot.png"
import green from '@material-ui/core/colors/green';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import EmailIcon from '@material-ui/icons/Email';


function MyFooter(props) {
    return (
        <div>
            <div className="connect">
                <div className="center">
                    <div className="myRow smallerHeight pushDown">
                        <div className="leftCenter">
                            <h1 className="workTexts">Let's work together</h1>
                            <h3> Have a project you'd like to discuss? </h3>
                        </div>
                        <div className="rightCenter">
                            <h4 className="socialLink"> <EmailIcon style={{color: green[500]}}></EmailIcon> Email </h4>
                            <h4 className="socialLink"> <InstagramIcon style={{color: green[500]}}></InstagramIcon> Instagram </h4>
                            <h4 className="socialLink"> <FacebookIcon style={{color: green[500]}}></FacebookIcon>Facebook </h4>
                            <h4 className="socialLink"> <LinkedInIcon style={{color: green[500]}}></LinkedInIcon>Linkedin </h4>
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer">
                <center>
                    <p> © 2021 Pulkit Mahajan. All rights reserved </p>
                </center>
            </div>
        </div>

    );
}

export default MyFooter;