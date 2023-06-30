import React, { useState, useEffect } from "react";
import img1 from "./image/bnr1.jpg";
import img2 from "./image/bnr2.jpg";
import img3 from "./image/bnr3.jpg";
import img4 from "./image/bnr4.jpg";
import img5 from "./image/bnr5.jpg";
import Carousel from "react-bootstrap/Carousel";



export const Slider = () => {
  
  return (
   
    <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img4}
                  alt="fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img5}
                  alt="Fifth slide"
                />
              </Carousel.Item>

            </Carousel> 
             
  );
};
