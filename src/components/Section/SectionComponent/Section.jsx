import React from "react";
import styled from "styled-components";

var StyledSection = styled.div`
  // border: orange;
  // border-width: 10px;
  // border-style: solid;
  height: ${(props) => props.height || "30%"};
  margin-block-end: 8px;
  position: relative;
`;

export default function Section(props) {
  return (
    <StyledSection height={props.height} id={props.id}>
      {props.children}
    </StyledSection>
  );
}
