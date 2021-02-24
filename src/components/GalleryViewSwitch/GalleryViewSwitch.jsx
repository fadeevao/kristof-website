import React, { useState } from "react";
import styled, { css } from "styled-components";

import Gallery from "../Gallery";
import { images } from "../constants";

var SwitchContainer = styled.div`
  text-align: center;
`;

var SwitchContent = styled.div`
  margin: 2rem 1rem;
  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;

var SwitchButton = styled.span`
  padding: 0.6rem 1rem;
  border: 1px ridge;
  background-color: #ffffff;
  color: #adadad;
  ${(props) =>
    props.active &&
    css`
      color: #f44336;
      background-color: #f1f1f1;
      font-weight: 900;
    `}
`;

var ImageTileContainer = styled.div`
  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}

  ${(props) =>
    props.active &&
    css`
      display: flex;
      padding-bottom: 5rem;
      justify-content: center;

      @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
      }
    `}
`;

var ImageTile = styled.div`
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  width: 30rem;
  height: 30rem;
  margin: 2rem;

  @media screen and (max-width: 600px) {
    width: 20rem;
    height: 20rem;
    margin: 1rem;
  }
`;

export default function GalleryViewSwitch() {
  const [galleryActive, setGalleryActive] = useState(true);
  const [detailedViewActive, setDetailedViewActive] = useState(false);

  function toggleNavigation() {
    setGalleryActive(!galleryActive);
    setDetailedViewActive(!detailedViewActive);
  }

  return (
    <SwitchContainer>
      <SwitchButton active={galleryActive} onClick={toggleNavigation}>
        Gallery
      </SwitchButton>
      <SwitchButton active={detailedViewActive} onClick={toggleNavigation}>
        Detailed View
      </SwitchButton>
      <SwitchContent active={galleryActive}>
        <Gallery />
      </SwitchContent>
      <SwitchContent active={detailedViewActive} />
      <ImageTileContainer active={detailedViewActive}>
        {images.map((image) => {
          return <ImageTile image={image.original} />;
        })}
      </ImageTileContainer>
    </SwitchContainer>
  );
}
