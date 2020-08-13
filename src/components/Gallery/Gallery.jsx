import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

const GalleryContainer = styled.div`
  padding: 0 20rem 5rem 20rem;
  @media screen and (max-width: 1400px) {
    padding: 0 0;
  }
`;

export default function Gallery() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <GalleryContainer>
      <ImageGallery items={images} showPlayButton={false} />
    </GalleryContainer>
  );
}
