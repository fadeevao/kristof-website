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

export default function Layout() {
  return (
    <Container>
      <Section height="100vh">
        <Menu />
        <BannerContainer>
          <Banner src={deep_water} alt="website_banner" />
        </BannerContainer>
      </Section>
      <Section />
      <Section />
    </Container>
  );
}
