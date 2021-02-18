import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import { images } from "../constants";

const GalleryContainer = styled.div`
  padding: 0 20rem 5rem 20rem;
  @media screen and (max-width: 1400px) {
    padding: 0 0;
  }
`;

export default function Gallery() {
  return (
    <GalleryContainer>
      <ImageGallery items={images} showPlayButton={false} />
    </GalleryContainer>
  );
}
