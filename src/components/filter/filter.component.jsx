import React, { useRef,useState,useEffect} from "react";
import "../carouselfilter/Imagecarousel.css"
import { GiIsland } from "react-icons/gi";
import {MdOutlineArrowForwardIos} from "react-icons/md"
import { IoIosArrowBack,IoChevronForwardCircleOutline,IoChevronForwardOutline} from "react-icons/io";
import {
  Container,
  ContainerWrapper,
  FilterContainer,
  FilterIconContainer,
  FilterIconContainerWrapper,
  FilterText,
  FilterTextContainer,
  First,
  Icon,
  IconContainer,
  SearchIconContainer,
} from "./styles";
import amazingpools from "../../assets/amazingpools.jpg"
import rooms from "../../assets/room.jpg"
import trending from "../../assets/trending.jpg"
import lake from "../../assets/lake.jpg"
import amazingview from "../../assets/amazingview.jpg"
import Top from "../../assets/top.jpg"
import mansion from "../../assets/mansion.jpg"
import  cycladichome  from "../../assets/cycladichome.jpg"
import { Text } from "../text/styles";
import {PiSlidersHorizontalBold} from "react-icons/pi"


export const FilterComponent = () => {
  const containerRef = useRef(null);

  const btnPressPrev = () => {
    const container = containerRef.current;
    container.scrollLeft -= container.clientWidth;
  };

  const btnPressNext = () => {
    const container = containerRef.current;
    container.scrollLeft += container.clientWidth;
  };

  const filter = [
   
    {
      icon: rooms,
      name: "island20",
    },
    {
      icon: trending,
      name: "island",
    },
    {
      icon: amazingview,
      name: "island",
    },

    {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: lake,
        name: "island",
      },
  
      {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: mansion,
        name: "island",
      },
  
      {
        icon: cycladichome,
        name: "ddjd",
      },
      {
        icon: Top,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: amazingview,
        name: "island",
      },
  
      {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: amazingview,
        name: "island",
      },
  
      {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: amazingview,
        name: "island",
      },
  
      {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: amazingview,
        name: "island",
      },
  
      {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },
      {
        icon: trending,
        name: "island",
      },
      {
        icon: amazingview,
        name: "island",
      },
  
      {
        icon: amazingpools,
        name: "ddjd",
      },
      {
        icon: rooms,
        name: "island",
      },

  ];

      
  const [stickyClass, setStickyClass] = useState('');
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);
  return (
    <Container stickyClass={stickyClass}>
      <ContainerWrapper>
        <IconContainer  right="94%" onClick={btnPressPrev}>
          <IoIosArrowBack size="18" color="#000"  />
        </IconContainer>
        <FilterContainer className="product-carousel" ref={containerRef}>
          {filter.map(({ name, icon }) => (
            <FilterIconContainer  >
              <FilterIconContainerWrapper   onClick={()=>(prompt("yes"))}>

              <Icon src={icon} alt="icon"/>
              <FilterText>{name}</FilterText>
              </FilterIconContainerWrapper>
                {/* <First></First>/ */}
            </FilterIconContainer>
          ))}
        </FilterContainer>
        
        <IconContainer onClick={btnPressNext} left="85%"> 
          <MdOutlineArrowForwardIos/>
        </IconContainer>
        
        <FilterTextContainer>

            <PiSlidersHorizontalBold  size="24"/>
<Text>Filters</Text>
        </FilterTextContainer>
      </ContainerWrapper>
    </Container>
  );
};
