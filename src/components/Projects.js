import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Image, Button
} from 'react-bootstrap';
import './Projects.css';
import v2SC from "../images/V2ScreenShot.png";
import calcPhoto from '../images/firstWebsite.png'
import fakeNews from '../images/fakeNews.png'
// import FeaturedProjects from './components/FeaturedProjects';

export const myProjects = [
    {
        title: 'V2',
        info: "Designed and Developed mobile game app using Unity 3D. Published to both Google Play Store and App Store.",
        img: v2SC,
        skill1: 'Produced Music and SFX'
    },
    {
        title: 'Javascript Calculator',
        info: "This was my Hello World project - the project that started it all. I built this calculator in the 5th grade, and was hooked on coding and programming since.",
        img: calcPhoto,
        skill1: 'Produced Music and SFX'
    },
    {
        title: 'Fake News Classifier',
        info: "Designed and Developed Fake news classifier as a part of EE460J - Data Science Lab. Worked with several others in order to train neural net to detect fake news.",
        img: fakeNews,
        skill1: 'Produced Music and SFX'
    }
    
]

class ProjectLeft extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        let index = this.props.index;
        console.log(index);
        this.state = {
            title: myProjects[index].title,
            info: myProjects[index].info,
            img: myProjects[index].img,
            skill1: myProjects[index].skill1,
            // console.log(index);
            // title = this.props.image
        }
    }
    render() {
        return (
            <div>
                <div className="myRow setHeight">
                    <div className="leftImg">
                        <Image src={this.state.img} className="myImg" rounded />
                    </div>
                    <div className="rightText">
                        <h1 className="projectTitle">{this.state.title}</h1>
                        <h3>{this.state.info}
                        </h3>
                        <li className="skillsListItem" id="Music">
                            {this.state.skill1}
                        </li>
                        <li className="skillsListItem" id="Code">
                            Programmed all game behavior
                        </li>
                        <li className="skillsListItem" id="Design">
                            Designed UI/UX, VFX for game
                        </li>
                        <div className="horizontalCenter">
                        <Button variant="success" block={true} size="lg">View Others</Button>{' '}
                    </div>
                    </div>
                </div>
                <div className="myRow vspace">
                    
                </div>
            </div >
        );
    }
}
class ProjectRight extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        let index = this.props.index;
        console.log(index);
        this.state = {
            title: myProjects[index].title,
            info: myProjects[index].info,
            img: myProjects[index].img,
            skill1: myProjects[index].skill1,
            // console.log(index);
            // title = this.props.image
        }
    }
    render() {
        return (
            <div>
                <div className="myRow setHeight">
                    <div className="leftText">
                        <h1 className="projectTitle">{this.state.title}</h1>
                        <h3>{this.state.info}
                        </h3>
                        <li className="skillsListItem" id="Music">
                            {this.state.skill1}
                        </li>
                        <li className="skillsListItem" id="Code">
                            Programmed all game behavior
                        </li>
                        <li className="skillsListItem" id="Design">
                            Designed UI/UX, VFX for game
                        </li>
                        {/* <div className="horizontalCenter">
                            <Button variant="success" block={true} size="lg">View Others</Button>{' '}
                        </div> */}
                    </div>

                    <div className="rightImg">
                        <Image src={this.state.img} className="myImg" rounded />
                    </div>
                </div>


                <div className="myRow vspace">

                </div>
            </div >
        );
    }
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }
    renderProjects(i) {
        if (i % 2 == 0) {
            return (
                <ProjectLeft index={i}
                ></ProjectLeft>
            );
        } else {
            return (
                <ProjectRight index={i}
                ></ProjectRight>
            );
        }

    }
    render() {
        return (
            <div>
                <div className="projectsHeader">
                    <div className="center">
                        <div className="smallerHeight">
                            <h1 className="nameText">Projects</h1>
                            <br /><br />
                            <h3 className="w-10"> Although I'm only a junior in college, I've been developing since a young age. Here are some of my favorite projects.
                        </h3>
                        </div>
                    </div>
                </div>
                <div className="center">
                    {this.renderProjects(0)}
                    {this.renderProjects(1)}
                    {this.renderProjects(2)}
                </div>

            </div>




        );
    }
}

export default Projects;
