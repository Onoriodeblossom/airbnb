import React from "react";
import { Indicator, IndicatorItems } from "./styles";
import "./indicator.css";

export const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return(
    <div className="carousel-indicators">
    {slides.map((_, index) => (
        <button 
          
          onClick={() => switchIndex(index)}
          className={`carousel-indicator-item${currentIndex === index ? ' active' : ''}`}
      >
        
      </button>
    ))}
  </div>
  )
};
