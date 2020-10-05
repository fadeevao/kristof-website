import React from "react";
import Section from "../Section";
import PageHeader from "../PageHeader";
import Gallery from "../Gallery";
import styled from "styled-components";
import InstagramEmbed from "react-instagram-embed"; //https://www.npmjs.com/package/react-instagram-embed

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
  flex-direction: ${(props) => props.direction || "row"};
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

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
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

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </div>
          </Tile>
        </SectionContent>
      </Section>
      <Section id="artwork">
        <Header>My artwork</Header>
        <Gallery />
      </Section>
      <Section id="experiences">
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
    </Container>
  );
}
