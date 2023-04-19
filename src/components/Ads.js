import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import slide1 from "./assets/adsimages/adidas.png";
import slide2 from "./assets/adsimages/nike.png";
import slide3 from "./assets/adsimages/puma.jpeg";
const Ads = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Buy Adidas Products!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Buy Nike Products!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Coming Soon!</h3>
            <p>Don't miss out</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Ads;
