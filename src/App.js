import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import AboutMe from './components/AboutMe';
import AboutPhotos from './components/AboutPhotos'
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import MyFooter from './components/MyFooter';


function App() {
  const [logoText, setLogo] = useState("PM");
  
  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" bg="darkTheme" variant="dark">
          <Navbar.Brand> <Link to="/" onClick={() =>setLogo("PM")}> {logoText} </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav >
              <Nav.Link> <Link to="/AboutPhotos" onClick={() =>setLogo("Pulkit Mahajan")}> About </Link></Nav.Link>
              <Nav.Link> <Link to="/Projects" onClick={() =>setLogo("Pulkit Mahajan")}>Projects </Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/AboutPhotos">
            <AboutPhotos />
          </Route>
          
          <Route path="/Projects">
            <Projects />
          </Route>
          
          
          <Route path="/">
            <AboutMe> </AboutMe>
            <FeaturedProjects></FeaturedProjects>
            
          </Route>

        </Switch>

      </Router>
      <MyFooter></MyFooter>

      {/* <MyFooter> */}

      {/* </MyFooter> */}
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Projects</h2>;
}


export default App;