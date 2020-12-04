import React from "react";
import Section from "../SectionComponent/Section";

import { Tile, Header, SectionContent, TextContent } from "../../shared";

import InstagramEmbed from "react-instagram-embed"; //https://www.npmjs.com/package/react-instagram-embed

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
             {/* TODO - add access token */}
            <InstagramEmbed
              url="https://www.instagram.com/p/CCWNoMzpTpe"
              maxWidth={500}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </TextContent>
        </Tile>
      </SectionContent>
    </Section>
  );
}
