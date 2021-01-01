import styled from "styled-components";

export var SectionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.direction || "row"};
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export var Tile = styled.div`
  background-color: ${(props) => props.backgroundColour || " #f1f1f1"};
  padding: 1rem;
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

export var Header = styled.p`
  padding: 1.5rem;
  font-size: 2.5rem;
  flex: 1;
  font-family: "Arvo";

  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export var Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export var TextContent = styled.div`
  font-size: 1.3rem;
  padding: ${(props) => props.padding || "0"}rem;
`;

export default { Image, Header, Tile, SectionContent, TextContent };
