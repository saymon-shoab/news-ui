import React from 'react';
import { Carousel } from 'react-bootstrap';
import banar01 from './../../../image/01.jpg'
import banar02 from './../../../image/02.jpg'
import banar03 from './../../../image/03.jpg'
const Banar = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      style={{height:'300px'}}
      className="d-block w-100"
      src={banar01}
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{height:'300px'}}
      className="d-block w-100"
      src={banar02}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{height:'300px'}}
      className="d-block w-100"
      src={banar03}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banar;