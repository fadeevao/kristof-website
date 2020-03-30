import React, { useState } from "react";
import styled, { css } from "styled-components";

var MenuContainer = styled.div`
  @media screen and (min-width: 601px) {
    float: right;
    padding: 1rem 1rem 2rem 0rem;
    position: absolute;
    padding-left: 70%;
    right: 1rem;

    .icon {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    ${props =>
      !props.openMenu &&
      css`
        a:not(:first-child) {
          display: none;
        }
        .icon {
          position: absolute;
          right: 0;
          top: 0;
          float: right;
          display: block;
        }
      `}
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    ${props =>
      props.openMenu &&
      css`
        background: red;
        width: 100%;
        .icon {
          position: absolute;
          right: 0;
          top: 0;
          float: right;
          display: block;
        }
        ${HorizontalMenuItem} {
          float: none;
          display: block;
          text-align: left;
          color: black;
          padding: 0.5rem 0;
        }
      `}
  }
`;

var HorizontalMenuItem = styled.a`
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: white;

  &:hover {
    color: red;
  }

  &:active {
    background-color: #4caf50;
    color: grey;
  }
`;

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleNavigation() {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }

  return (
    <MenuContainer
      className={`topnav ${openMenu ? "responsive" : ""}`}
      openMenu={openMenu}
    >
      <HorizontalMenuItem href="#home">Home</HorizontalMenuItem>
      <HorizontalMenuItem href="#placeholder">News</HorizontalMenuItem>
      <HorizontalMenuItem href="#about">Contact</HorizontalMenuItem>
      <HorizontalMenuItem href="#test">About</HorizontalMenuItem>
      <button class="icon" onClick={toggleNavigation}>
        <i className="fa fa-bars"></i>
      </button>
    </MenuContainer>
  );
}
