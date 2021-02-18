import React, { useState } from "react";
import styled, { css } from "styled-components";

import Gallery from "../Gallery";

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

export default function GalleryViewSwitch(props) {
  const [active, setActive] = useState(true);

  function toggleNavigation() {
    console.log("active");
    setActive(!active);
  }

  return (
    <SwitchContainer>
      <SwitchButton active={active} onClick={toggleNavigation}>
        Gallery View
      </SwitchButton>
      <SwitchButton active={!active} onClick={toggleNavigation}>
        Detailed View
      </SwitchButton>
      <SwitchContent active={active}>
        <Gallery />
      </SwitchContent>
      <SwitchContent active={!active}>
        <p>detailed view TBC</p>
      </SwitchContent>
    </SwitchContainer>
  );
}
