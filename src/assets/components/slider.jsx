import React, { useEffect, useState, createContext, Component } from "react";
import active from '../img/works/activebox.webp';
import platform from '../img/works/platforms.webp';
import Port from '../img/works/portf.webp';
import MoGo from '../img/works/mogo.webp';
import { Carousel } from "./corausel";
import { SliderPage } from "./sliderPage";

export default class Slider extends Component {
  render() {
    return (
      <div className="carousel_width">
        <Carousel infinite>
          {/* <Carousel.SliderPage >
            <img className="carousel_img" src={active} alt='ActiveBox'/>
          </Carousel.SliderPage> */}

          <Carousel.SliderPage>
            <img className="carousel_img" src={platform} alt='Neb'/>
          </Carousel.SliderPage>

          <Carousel.SliderPage>
            <img className="carousel_img" src={Port} alt='Portfolio'/>
          </Carousel.SliderPage>

          <Carousel.SliderPage>
            <img className="carousel_img" src={MoGo} alt='MoGo'/>
          </Carousel.SliderPage>

        </Carousel>
      </div>
    )
  }
}