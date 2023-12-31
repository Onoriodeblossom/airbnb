import React, { useState } from "react";
import {
  Carousel,
  CarouselInner,
  Container,
  Flex,
  FlexDiv,
  IconContainer,
  Image,
  TextDiv,
} from "./styles";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { CarouselIndicators } from "./indicator";
import { Like } from "../like/like.component";

export const CarouselCard = ({
  indicators = false,
  autoPlay = true,
  controls = false,
  slides,
  title,
  date,
  price,
  rating,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  const switchIndex = (index) => {
    setCurrentSlide(index);
  };



  return (
    <Container>
      <Carousel>

        <Like />
        {indicators && (
          <CarouselIndicators
            slides={slides}
            currentIndex={currentSlide}
            switchIndex={switchIndex}
          />
        )}
        {controls && (
          <FlexDiv>
            <IconContainer>
              <IoIosArrowBack onClick={prev} />
            </IconContainer>
            <IconContainer>
              <MdOutlineArrowForwardIos onClick={next} />
            </IconContainer>
          </FlexDiv>
        )}
        <CarouselInner
          currentSlide={currentSlide}
          
          // onScroll={ transform: `translateX(${-currentSlide * 100}%)` }
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >

          {slides.map((slide, index) => (
            <Image src={slide} key="index" />
          ))}
        </CarouselInner>
      </Carousel>
      <Flex>
        <TextDiv>{title}</TextDiv>

        <TextDiv>
          <BsFillStarFill />
          {rating}
        </TextDiv>
      </Flex>
      <Flex>
        <TextDiv color="#7d837d">Viewed 43,393 times last week</TextDiv>
      </Flex>
      <Flex>
        <TextDiv color="#7d837d">{date}</TextDiv>
      </Flex>
      <Flex>
        <TextDiv>$ {price}</TextDiv>
      </Flex>
    </Container>
  );
};
