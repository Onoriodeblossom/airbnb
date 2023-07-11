import { styled } from "styled-components";
import { Text } from "../text/styles";

export const Container = styled.div`
  width: 23%;
  padding-top: 20px;
  // border-radius:20px;
  overflow: hidden;
  //  height:490px;
  @media only screen and (max-width: 1329px) {
    width: 32%;
  }

  @media only screen and (max-width: 949px) {
    width: 45%;
  }

  @media only screen and (max-width: 549px) {
    width: 100%;
  }
`;

export const Carousel = styled.div`
  // margin: 0 auto;
  // overflow: hidden;
  // max-width: 400px;
  // border-radius:6px;
  display: flex;
  align-items: center;
  // background:green;
  position: relative;
`;

export const FlexDiv = styled.div`
  width: 87%;
  margin-left: 25px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: ease 1s;
  position: relative;
`;

export const Button = styled.button`
  border: 0px;
`;

export const Image = styled.img`
  min-height: 360px;
  max-height: 360px;
  max-width: 100%;
  min-width: 100%;
  border-radius: 20px;
  @media only screen and (max-width: 1239px) {
    max-height: 300px;
    min-height: 300px;
  };


  @media only screen and (max-width: 549px) {
    min-height: 380px;
    max-height: 380px;
  }
`;

export const IconContainer = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 6px;
  background-color: white;
  border: 1px solid #b3b3b3;
`;

export const Indicator = styled.div`


  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;

`;
export const IndicatorItems = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background: #fff;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
`;

export const ActiveButton = styled.div`
  opacity: 1;
`;
export const Flex = styled.div`
  width: 98%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextDiv = styled(Text)``;
