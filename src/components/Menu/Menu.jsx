import React, { useState } from "react";
import styled, { css } from "styled-components";
import Burger from "react-css-burger"; //https://github.com/mattvox/react-css-burger

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
    ${(props) =>
      !props.openMenu &&
      css`
        a {
          display: none;
        }
        .icon {
          position: absolute;
          right: 1rem;
        }
      `}
  }

  @media screen and (max-width: 600px) {
    position: relative;
    ${(props) =>
      props.openMenu &&
      css`
        background: red;
        width: 100%;
        .icon {
          position: absolute;
          right: 1rem;
          float: right;
          display: block;
        }
        ${MenuLink} {
          float: none;
          display: block;
          text-align: left;
          color: black;
          padding: 0.5rem 0;
        }
      `}
  }
`;

var MenuLink = styled.a`
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: white;

  &:hover {
    color: red;
  }
`;

var MenuItemContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

var MenuIconContainer = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: right;
  }
`;

export default function Menu() {
  const [active, setActive] = useState(false);

  function toggleNavigation() {
    setActive(!active);
  }

  return (
    <MenuContainer
      className={`topnav ${active ? "responsive" : ""}`}
      openMenu={active}
    >
      <MenuItemContainer>
        <MenuIconContainer>
          <div class="icon">
            <Burger
              onClick={toggleNavigation}
              active={active}
              color="#FFFFFF"
              burger="squeeze"
              hoverOpacity={0.8}
            />
          </div>
        </MenuIconContainer>
        <MenuLink href="#home">Home</MenuLink>
        <MenuLink href="#placeholder">News</MenuLink>
        <MenuLink href="#about">Contact</MenuLink>
        <MenuLink href="#test">About</MenuLink>
      </MenuItemContainer>
    </MenuContainer>
  );
}
