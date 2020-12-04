import React from "react";
import Section from "../SectionComponent/Section";

import { Image, Tile, Header, SectionContent, TextContent } from "../../shared";

export default function About(props) {
  return (
    <Section id="about">
      <SectionContent>
        <Tile>
          <Image
            src="https://www.warringtonguardian.co.uk/resources/images/10827640?type=responsive-gallery-fullscreen"
            alt="Krzysztof Wojtkiewicz"
          />
        </Tile>
        <Tile>
          <div>
            <Header>About me</Header>
            <TextContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </TextContent>
          </div>
        </Tile>
      </SectionContent>
    </Section>
  );
}
