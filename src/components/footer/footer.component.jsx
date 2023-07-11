import React from "react";
import { Text } from "../text/styles";
import { FlexDiv, FooterContainer, FooterContainerWrapper } from "./styles";
import {BsChevronUp} from "react-icons/bs"

export const Footer = ()=>{
    return(

        <FooterContainer>
            <FooterContainerWrapper>

            <FlexDiv>
                <Text>2023 Airbnb, Inc</Text>
                <Text>.</Text>
                <Text>Terms</Text>
                <Text>.</Text>

                <Text>Sitemap</Text>

                <Text>.</Text>

                <Text>Privacy</Text>
                <Text>.</Text>
                <Text>Your Privacy Choice</Text>
                <Text>.</Text>
                <Text>Destination</Text>
            </FlexDiv>
            <FlexDiv width='20%'>
                <Text>English (US)</Text>
                <Text> USD </Text>
                <Text>Support & resources   </Text>
                <Text><BsChevronUp size={25} /></Text>

            </FlexDiv>
            </FooterContainerWrapper>
        </FooterContainer>
    )
}
