import React from "react";
import Section from "../SectionComponent/Section";

import GalleryViewSwitch from "../../GalleryViewSwitch";

import { Header } from "../../shared";

export default function Artwork(props) {
  return (
    <Section id="artwork">
      <Header>My artwork</Header>
      <GalleryViewSwitch />
    </Section>
  );
}
