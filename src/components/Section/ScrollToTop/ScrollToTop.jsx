import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

var ScrollIcon = styled(FaArrowCircleUp)`
  height: 3rem;
  width: 3rem;
  opacity: 0.3;
  right: 0;
  margin: 3rem;

  :hover {
    opacity: 1;
  }
`;

var ScrollContainer = styled.div``;

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ScrollContainer>
      <ScrollIcon
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      />
    </ScrollContainer>
  );
}
