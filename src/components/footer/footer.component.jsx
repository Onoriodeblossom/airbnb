import React from "react";
import { Text } from "../text/styles";
import { FlexDiv, FooterContainer, FooterContainerWrapper } from "./styles";
import {BsChevronUp} from "react-icons/bs"

export const Footer = ()=>{
    return(

        <FooterContainer>
            <FooterContainerWrapper>

            <FlexDiv justifyContent="space-between">
                <Text>2023 Airbnb, Inc .</Text>
              
                <Text>Terms .</Text>
               

                <Text>Sitemap .</Text>

              

                <Text>Privacy .</Text>
              
                <Text>Your Privacy Choice .</Text>
               
                <Text>Destination</Text>
            </FlexDiv>
            <FlexDiv width='25%' justifyContent="space-between">
                <Text>English (US)</Text>
                <Text> USD </Text>

                <Text>Support & resources   <BsChevronUp size={25} /> </Text>
                

            </FlexDiv>
            </FooterContainerWrapper>
        </FooterContainer>
    )
}
