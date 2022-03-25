import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <NavItems>Trending</NavItems>
        <NavItems>PODCAST</NavItems>
        <NavItems>MOODS AND GENRES</NavItems>
        <NavItems>NEW RELEASE</NavItems>
        <NavItems>DISCOVER</NavItems>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  width: calc(100vw - 15rem);
  justify-content: center;
`;

const NavItems = styled.div`
  margin: 1rem;
  color: white;
  letter-spacing: 0.1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
