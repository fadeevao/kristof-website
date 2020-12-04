import React from "react";
import styled from "styled-components";
import {FaArrowCircleUp} from 'react-icons/fa';

var SrollIcon = styled(FaArrowCircleUp)`
    height: 5rem;
    width: 5rem;
    opacity: 0.5;
    position: absolute;
    right: 0;
    margin: 3rem;

    :hover {
        opacity: 1;
    }
`;

var ScrollContainer = styled.div``;

export default function ScrollToTop() {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

  return <ScrollContainer><SrollIcon  onClick={scrollTop}/></ScrollContainer>;
}
