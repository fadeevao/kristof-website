import React from "react";
import Section from "../SectionComponent/Section";

import { Tile, Header, SectionContent } from "../../shared";

import InstagramEmbed from "react-instagram-embed"; //https://www.npmjs.com/package/react-instagram-embed

export default function Contacts(props) {
  return (
    <Section id="contacts">
      <SectionContent direction="column">
        <Header>Get in touch!</Header>
        <Tile direction="column">
          <div>
            Reach out via <a href="mailto:kw@gmail.com">email</a>
          </div>
          <div>
            Check out my art on instagram: <em>kristof87art</em>
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
          </div>
        </Tile>
      </SectionContent>
    </Section>
  );
}
