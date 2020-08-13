import React from "react";
import Section from "../Section";
import PageHeader from "../PageHeader";
import Gallery from "../Gallery";
import styled, { css } from "styled-components";

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

var Tile = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 2rem;
  flex: 1;

  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;

  flex-direction: ${(props) => props.direction || "row"};
`;

var Header = styled.p`
  margin: 10px;
  padding: 20px;
  font-size: 2.5rem;
  flex: 1;

  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

var Image = styled.img`
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
          <Tile>
            <Image
              src="https://www.warringtonguardian.co.uk/resources/images/10827640?type=responsive-gallery-fullscreen"
              alt="Krzysztof Wojtkiewicz"
            />
          </Tile>
          <Tile>
            <div>
              <Header>Who am I?</Header>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </div>
          </Tile>
        </SectionContent>
      </Section>
      <Section>
        <Header>My artwork</Header>
        <Gallery />
      </Section>
      <Section>
        <SectionContent>
          <Tile>
            <div>
              <Header>Ferens Art Gallery</Header>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              <Header>My Experience</Header>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </div>
          </Tile>
          <Tile direction="column">
            <Tile>
              <Image
                src="https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg"
                alt="Krzysztof Wojtkiewicz"
              />
            </Tile>{" "}
            <Tile>
              <Image
                src="https://www.warringtonguardian.co.uk/resources/images/10827640?type=responsive-gallery-fullscreen"
                alt="Krzysztof Wojtkiewicz"
              />
            </Tile>
          </Tile>
        </SectionContent>
      </Section>
      <Section>contacts</Section>
    </Container>
  );
}
