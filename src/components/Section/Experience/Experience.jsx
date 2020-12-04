import React from "react";
import Section from "../SectionComponent/Section";

import { Tile, Header, SectionContent, Image, TextContent } from "../../shared";

export default function Experience(props) {
  return (
    <Section id="experiences">
      <SectionContent>
        <Tile>
          <div>
            <Header>Ferens Art Gallery</Header>
            <TextContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            <TextContent>
            </TextContent>
              <Header>My Experience</Header>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </TextContent>
          </div>
        </Tile>
        <Tile direction="column">
          <Tile>
            <Image
              src="https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg"
              alt="Krzysztof Wojtkiewicz"
            />
          </Tile>
          <Tile>
            <Image
              src="https://www.warringtonguardian.co.uk/resources/images/10827640?type=responsive-gallery-fullscreen"
              alt="Krzysztof Wojtkiewicz"
            />
          </Tile>
        </Tile>
      </SectionContent>
    </Section>
  );
}
