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

export var Header = styled.p`
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

export var Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export default { Image, Header, Tile, SectionContent };
