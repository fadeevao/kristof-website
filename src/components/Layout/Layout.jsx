import React from "react";
import Section from "../Section";
import PageHeader from "../PageHeader";
import Gallery from "../Gallery";
import styled from "styled-components";

var Container = styled.div`
  border: black;
  border-width: 10px;
  border-style: solid;
  height: 100%;
  margin-block-end: 8px;
`;

var SectionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

var AboutMeContent = styled.div`
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
        <PageHeader />
      </Section>
      <Section>
        <SectionContent>
          <AboutMeContent>
            <MePic
              src="https://www.warringtonguardian.co.uk/resources/images/10827640?type=responsive-gallery-fullscreen"
              alt="Krzysztof Wojtkiewicz"
            />
          </AboutMeContent>

          <AboutMeContent>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          </AboutMeContent>
        </SectionContent>
      </Section>
      <Section>
        <Gallery />
      </Section>

      <Section id="gallery" />
    </Container>
  );
}
