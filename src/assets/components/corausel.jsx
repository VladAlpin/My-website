import React, { useEffect, useState, Children, cloneElement } from "react";
import { useRef } from "react";
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';
import { CarouselContext } from "./coruselContext";
import { SliderPage } from "./sliderPage";

const TRANSITION_DURATION = 500

export const Carousel = ({children, infinite}) => {

  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(800);
  const [pages, setPages] = useState([]);
  const [clonesCount, setClonesCount] = useState({head: 0, tail: 0});
  const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION);

  const windowElRef = useRef();

  
  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]),
        ...children, 
        cloneElement(children[0]),
      ])
      setClonesCount({head: 1, tail: 1})
      return
    }
    setPages(children)
  }, [children, infinite])

  useEffect(() => {

    const resizeHandler = () => {

      const windowElWidth = windowElRef.current.offsetWidth
      setWidth(windowElWidth)
      setOffset(-(clonesCount.head * width))
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }

  }, [clonesCount, width])

  useEffect(() => {

    if(!infinite) return

    if(offset === 0 ) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)))
      }, TRANSITION_DURATION)
      return
    }
    if(offset === -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset( -(clonesCount.head * width) )
      }, TRANSITION_DURATION)
      return
    }
  }, [offset, infinite, pages, clonesCount, width]) 

  const handleLeftArrowClick = () => {
    if (!transitionDuration) {
      setTransitionDuration(TRANSITION_DURATION);
    }

    setOffset((currentOffset) => {
      const newOffset = currentOffset + width

      return Math.min(newOffset, 0) 
    })
  }

  const handleRightArrowClick = () => {
    if (!transitionDuration) {
      setTransitionDuration(TRANSITION_DURATION);
    }

    setOffset((currentOffset) => {
      const newOffset = currentOffset - width
      const maxOffset = -(width * (pages.length))
      return Math.max(newOffset, maxOffset)
    })
  }

    // setInterval(() => {
    //   handleRightArrowClick();

    // }, 3000)

  return (
    <CarouselContext.Provider value={{width}}>
      <div className="carousel-container">
          <FaChevronCircleLeft className="carousel_arrow-left" onClick={handleLeftArrowClick}/>
          <div className="carousel-window" ref={windowElRef}>
            <div className="carousel-all-pages-container" 
            style={{
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitionDuration}ms`
            }}
            >{pages}</div>
          </div>
          <FaChevronCircleRight className="carousel_arrow-right" onClick={handleRightArrowClick}/>
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.SliderPage = SliderPage