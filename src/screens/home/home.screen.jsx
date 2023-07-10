import React from "react";
import { NavBar } from "../../components/navbar/navbar.component";
import { CarouselFlexContainer, Container, ContainerWrapper } from "./styles";
import { CarouselCard } from "../../components/carouselCard/carouselCard";
import { list } from "../../components/data";
import { Footer } from "../../components/footer/footer.component";

const HomeScreen = () => {

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
<Footer/>

    </Container>
  );
};

export default HomeScreen;
