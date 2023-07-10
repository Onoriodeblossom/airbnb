import React, { useRef, useState, useEffect } from "react";
import { GiIsland, GiMountainCave, GiWoodCabin } from "react-icons/gi";
import { MdOutlineArrowForwardIos, MdOutlineBeachAccess } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import { IoColorPaletteOutline } from "react-icons/io5";
import {
  Container,
  ContainerWrapper,
  FilterContainer,
  FilterIconContainer,
  FilterIconContainerWrapper,
  FilterText,
  FilterTextContainer,
  FilterTextContainerWrapper,
  Icon,
  IconContainer,
  
} from "./styles";
import { Text } from "../text/styles";
import { PiSlidersHorizontalBold, PiCastleTurret } from "react-icons/pi";
import {
  LiaFireAltSolid,
  LiaSwimmingPoolSolid,
  LiaWheelchairSolid,
  LiaSkiingSolid,
} from "react-icons/lia";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsCupHot } from "react-icons/bs";
import { TbUfo } from "react-icons/tb";
import { FaRegBuilding, FaRegSnowflake, FaHouseDamage } from "react-icons/fa";

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
      icon: <TbUfo size={30} />,
      name: "OMG!",
    },

    {
      icon: <HiOutlineHomeModern size={30} />,
      name: "Design",
    },

    {
      icon: <BsCupHot size={30} />,
      name: " Bed & breakfast ",
    },
    {
      icon: <MdOutlineBeachAccess size={30} />,
      name: "Beach",
    },
    {
      icon: <FaRegBuilding size={30} />,
      name: "island",
    },
    {
      icon: <GiIsland size={30} />,
      name: "island",
    },

    {
      icon: <LiaSwimmingPoolSolid size={30} />,
      name: "Amazing Pools",
    },
    {
      icon: <LiaFireAltSolid size={35} />,
      name: "Trending",
    },
{
      icon: <FaRegSnowflake size={30} />,
      name: "Arctic",
    },

    {
      icon: <GiMountainCave size={30} />,
      name: "Cave",
    },

    {
      icon: <GiWoodCabin size={30} />,
      name: "cabin ",
    },
    {
      icon: <IoColorPaletteOutline size={30} />,
      name: "Design",
    },
    {
      icon: <LiaWheelchairSolid size={30} />,
      name: "island",
    },
    {
      icon: <GiIsland size={30} />,
      name: "island",
    },

    {
      icon: <LiaSkiingSolid size={30} />,
      name: "Ski-in/out",
    },
    {
      icon: <FaHouseDamage size={35} />,
      name: "Farm",
    },
    {
      icon: <PiCastleTurret size={30} />,
      name: "castle",
    },
  ];

  const [stickyClass, setStickyClass] = useState("");
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  return (
    <Container stickyClass={stickyClass}>
      <ContainerWrapper>
        <IconContainer right="94%" onClick={btnPressPrev}>
          <IoIosArrowBack size="18" color="#000" />
        </IconContainer>
        <FilterContainer className="product-carousel" ref={containerRef}>
          {filter.map(({ name, icon }) => (
            <FilterIconContainer>
              <FilterIconContainerWrapper onClick={() => prompt("yes")}>
                <Icon>{icon}</Icon>
                <FilterTextContainerWrapper>
                  <FilterText>{name}</FilterText>
                </FilterTextContainerWrapper>
              </FilterIconContainerWrapper>
      
            </FilterIconContainer>
          ))}
        </FilterContainer>

        <IconContainer onClick={btnPressNext} left="85%">
          <MdOutlineArrowForwardIos />
        </IconContainer>

        <FilterTextContainer>
          <PiSlidersHorizontalBold size="24" />
          <Text>Filters</Text>
        </FilterTextContainer>
      </ContainerWrapper>
    </Container>
  );
};
