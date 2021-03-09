
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './AboutPhotos.css';
import v2SC from "../images/V2ScreenShot.png"
import FirstPhoto from '../images/DSC_0005.jpg'
import SecondPhoto from '../images/me4.png'
import ThirdPhoto from '../images/tBell.jpg'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function AboutPhotos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel nextIcon=">" prevIcon="<" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block resize1"
          src={FirstPhoto}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>My Name is Pulkit Mahajan</h3>
          <p>I'm a programmer from the Bay</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block resize1"
          src={SecondPhoto}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>I started learning to code when I was 13</h3>
          <p>This has turned into a lifetime of tinkering with technology and gadgets</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block resize1"
          src={ThirdPhoto}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>I'm from the Bay Area</h3>
          <p>
            Still think California is the best state.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

//   render(<AboutPhotos />);

export default AboutPhotos;
