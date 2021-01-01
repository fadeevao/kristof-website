import React from "react";
import Section from "../SectionComponent/Section";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

import { Tile, Header, SectionContent, TextContent } from "../../shared";

var InstagramIcon = styled(FaInstagram)`
  height: 2.5rem;
  width: 2.5rem;
  :hover {
    opacity: 1;
  }

  :active {
    color: black;
  }

  @media screen and (max-width: 600px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export default function Contacts(props) {
  return (
    <Section id="contacts">
      <SectionContent direction="column">
        <Tile direction="column" backgroundColour="white">
          <Header>Get in touch!</Header>
          <TextContent>
            Reach out via <a href="mailto:kw@gmail.com">email</a>
          </TextContent>
          <TextContent>
            Check out my art on instagram: <em>kristofs_art_gallery</em>
          </TextContent>
          <TextContent padding="2">
            <a
              href="https://www.instagram.com/kristofs_art_gallery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </TextContent>
        </Tile>
      </SectionContent>
    </Section>
  );
}
