import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import deep_water from "../../assets/images/deep_water.jpg";

var BannerContainer = styled.div`
  overflow: hidden;
`;

var Banner = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 100%;
`;

var WelcomeText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: wheat;
  text-align: center;
  padding: 0rem 3rem;

  @media screen and (max-width: 600px) {
    padding: 0rem;
    top: 70%;
  }
`;

var BannerHeading = styled.div`
  padding-bottom: 1rem;
  font-size: 3.5rem;
`;

var BannerSubheading = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
    padding: 0rem;
  }

  padding: 0rem 3rem 1rem 3rem;
  font-size: 1.5rem;
  width: 60%;
  margin: auto;
`;

var LinkButton = styled.a`
  background-color: #f44336;
  color: white;
  padding: 1.5rem 4rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;

  &:hover {
    background-color: red;
  }
`;

export default function PageHeader() {
  return (
    <div>
      <Menu />
      <BannerContainer>
        <Banner src={deep_water} alt="website_banner" />
        <WelcomeText>
          <BannerHeading>The world of subconscious landscapes</BannerHeading>
          <BannerSubheading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </BannerSubheading>
          <LinkButton href="#gallery">Dive in</LinkButton>
        </WelcomeText>
      </BannerContainer>
    </div>
  );
}
