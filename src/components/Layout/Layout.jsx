import React from "react";
import Section from "../Section";
import Menu from "../Menu";
import styled from "styled-components";
import deep_water from "../../assets/images/deep_water.jpg";

var Container = styled.div`
  border: black;
  border-width: 10px;
  border-style: solid;
  height: 100%;
  margin-block-end: 8px;
`;

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

var SectionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

var AboutMe = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  flex: 1;

  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

var MePic = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export default function Layout() {
  return (
    <Container>
      <Section height="100vh">
        <Menu />
        <BannerContainer>
          <Banner src={deep_water} alt="website_banner" />
          <WelcomeText>
            <BannerHeading>The world of subconscious landscapes</BannerHeading>
            <BannerSubheading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </BannerSubheading>
            <LinkButton href="#gallery">Dive in</LinkButton>
          </WelcomeText>
        </BannerContainer>
      </Section>
      <Section>
        <SectionContent>
          <AboutMe>
            <MePic
              src="https://www.warringtonguardian.co.uk/resources/images/10827640?type=responsive-gallery-fullscreen"
              alt="Krzysztof Wojtkiewicz"
            />
          </AboutMe>

          <AboutMe>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim
            assum.
          </AboutMe>
        </SectionContent>
      </Section>

      <Section id="gallery" />
    </Container>
  );
}
