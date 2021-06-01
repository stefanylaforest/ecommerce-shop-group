import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"
import {theme} from './GlobalStyles'

function Hamburger({ isHamburgerOpen, handleClickOnHamburger, handleClickOnCartIcon}) {
  return (
    <HamburgerContainer isHamburgerOpen={isHamburgerOpen}>
      <Icon onClick={handleClickOnHamburger}>
        <CloseIcon />
      </Icon>
      <Wrapper>
        <HamburgerLink to="/" onClick={handleClickOnHamburger}>Home</HamburgerLink>
        <HamburgerLink to="products" onClick={handleClickOnHamburger}>All Products</HamburgerLink>
        <HamburgerLink to="view-order" onClick={handleClickOnHamburger}>Track-Order</HamburgerLink>
        <HamburgerLink onClick={()=>{handleClickOnHamburger(); handleClickOnCartIcon(); } }>My Cart</HamburgerLink>
   
      </Wrapper>
    </HamburgerContainer>
  );
}

const HamburgerLink = styled(Link)`
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.2s ease-in-out;
  }
`;

const Wrapper = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const HamburgerContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 500px;
  height: 100%;
  background: #454e51;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isHamburgerOpen }) => (isHamburgerOpen ? "100%" : "0")};
  right: ${({ isHamburgerOpen }) => (isHamburgerOpen ? "0" : "-100%")};
  box-shadow: ${({ isHamburgerOpen }) =>
    isHamburgerOpen ? "0 0 0 2000px rgb(0,0,0, 0.6)" : "0"};
`;

export default Hamburger;
