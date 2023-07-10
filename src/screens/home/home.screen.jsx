import React from "react";
import { NavBar } from "../../components/navbar/navbar.component";
import { CarouselFlexContainer, Container, ContainerWrapper } from "./styles";
import { FilterComponent } from "../../components/filter/filter.component";
import { CarouselCard } from "../../components/carouselCard/carouselCard";
import { list } from "../../components/data";

const HomeScreen = () => {
  const slides = [
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
    {
      slider: "hf",
    },
  ];
  return (
    <Container>
      <NavBar />
      <ContainerWrapper>

      <CarouselFlexContainer>

      {list.map(({imgSrc,date,price,title,
      rating})=>(

      <CarouselCard indicators={true} controls={true} slides={imgSrc} date={date} title={title} rating={rating} price={price}/>
      ))}
      </CarouselFlexContainer>
      </ContainerWrapper>


    </Container>
  );
};

export default HomeScreen;
