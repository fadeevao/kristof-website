import React from "react";
import Section from "../SectionComponent/Section";

import Gallery from "../../Gallery";

import { Header } from "../../shared";

export default function Artwork(props) {
  return (
    <Section id="artwork">
      <Header>My artwork</Header>
      <Gallery />
    </Section>
  );
}
