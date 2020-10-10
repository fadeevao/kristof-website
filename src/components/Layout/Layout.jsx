import React from "react";
import Section from "../Section/SectionComponent";
import { About, Artwork, Contacts, Experience } from "../Section";

import PageHeader from "../PageHeader";
import styled from "styled-components";

var Container = styled.div`
  // border: black;
  // border-width: 10px;
  // border-style: solid;
  height: 100%;
  margin-block-end: 8px;
`;

export default function Layout() {
  return (
    <Container>
      <Section height="100vh">
        <PageHeader />
      </Section>
      <About />
      <Artwork />
      <Experience />
      <Contacts />
    </Container>
  );
}
