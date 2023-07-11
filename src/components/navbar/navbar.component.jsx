import React from "react";
import {
  Logo,
  NavBarContainer,
  FilterContainer,
  TextContainer,
  Filter,
  ResponsiveMode,
  SearchIconContainer,
  Divider,
  Container,
  ProfileContainer,
  NavBarContainerWrapper,
  IconContainer,
  Flex,
} from "./styles";
import logo from "../../assets/logo.png";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Text } from "../text/styles";
import { TbWorld } from "react-icons/tb";
import { FilterComponent } from "../filter/filter.component";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarContainerWrapper>
        <Logo src={logo} alt="logo" />

        <FilterContainer>
          <Filter>
            <Text>Anywhere</Text>
            <Divider />
            <Text>Any week</Text>
            <Divider />
            <Text color="#717171">Add guests</Text>

            <SearchIconContainer>
              <BiSearch color="white" />
            </SearchIconContainer>
          </Filter>
        </FilterContainer>

        <Container>
          <Text>Airbnb your home</Text>
          <TbWorld size="20" />
          <ProfileContainer>
            <BiMenu size="24" color="#595959" />
            <BsPersonCircle size="24" color="#595959" />
          </ProfileContainer>
        </Container>
        <ResponsiveMode>
          <Flex>
            <BiSearch color="black" />
            <TextContainer>
              <Text> Anywhere</Text>
              <Text color="#ccc" size="14px">
                Any week . Add guests
              </Text>
            </TextContainer>
          </Flex>
          <IconContainer>
            <PiSlidersHorizontalBold size="24" />
          </IconContainer>
        </ResponsiveMode>
      </NavBarContainerWrapper>
      {/* <FilterComponent /> */}
    </NavBarContainer>
  );
};
