import React, {useContext} from "react";
import { CarouselContext } from "./coruselContext";

export const SliderPage = ({children}) => {
  const {width} = useContext(CarouselContext)

  return(
    <div className="sliderPage_main"
    style={{
      // minWidth: `${width}px`,
      // maxWidth: `${width}px`
    }}
    >
      {children}
    </div>
  )
}