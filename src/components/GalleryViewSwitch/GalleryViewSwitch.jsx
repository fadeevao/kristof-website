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
      color: red;
      background-color: #f1f1f1;
      font-weight: 900;
    `}
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
        Gallery View
      </SwitchButton>
      <SwitchButton active={detailedViewActive} onClick={toggleNavigation}>
        Detailed View
      </SwitchButton>
      <SwitchContent active={galleryActive}>
        <Gallery />
      </SwitchContent>
      <SwitchContent active={detailedViewActive}>
        <p>detailed view TBC</p>
      </SwitchContent>
    </SwitchContainer>
  );
}
