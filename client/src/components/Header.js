import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import CategoriesDropDown from "./Dropdowns/CategoriesDropDown";
import BrandDropDown from "./Dropdowns/BrandDropDown";
import WearablesDropDown from "./Dropdowns/WearablesDropDown";
import { GiRoundStar } from "react-icons/gi";

const Header = ({ handleClickOnCartIcon, handleClickOnHamburger }) => {
  const { selectedItems } = useContext(AppContext);
  const location = useLocation();

  return (
    <div
      style={{
        background: location.pathname !== "/" && "#454e51",
        paddingBottom: "16px",
      }}
    >
      <LogoRow>
        <HomeNavLink exact to="/">
          <Title>
            TECH<span style={{ color: `${theme.accentColor}` }}>ACTIV</span>
          </Title>
        </HomeNavLink>
        {location.pathname === "/" ||
        location.pathname === "/confirmation" ||
        location.pathname === "/view-order" ||
        location.pathname === "/brands" ||
        location.pathname.includes("/products") ? (
          <MobileIcon onClick={handleClickOnHamburger}>
            <FaBars />
          </MobileIcon>
        ) : (
          <></>
        )}
      </LogoRow>
      {location.pathname === "/" ||
      location.pathname === "/confirmation" ||
      location.pathname === "/view-order" ||
      location.pathname === "/brands" ||
      location.pathname.includes("/products") ? (
        <NavMenu>
          <CategoriesDropDown />
          <BrandDropDown />
          <WearablesDropDown />
          <StyledNavLink exact to="/products">
            <li>Shop All</li>
          </StyledNavLink>
          <StyledNavLink exact to="/view-order">
            <li>Track Your Order</li>
          </StyledNavLink>
          <li>
            <StyledCartIcon onClick={handleClickOnCartIcon} />
            <ItemInCart selectedItems={selectedItems} />
          </li>
        </NavMenu>
      ) : (
        <></>
      )}
    </div>
  );
};

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  letter-spacing: -3px;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  color: white;
  text-transform: uppercase;

  @media screen and (max-width: 820px) {
    display: none !important;
  }
`;

const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: white;

  &:hover {
    color: ${theme.accentColor};
  }
  &:visited {
    color: none;
  }
`;

const ItemInCart = styled(GiRoundStar)`
  visibility: ${({ selectedItems }) =>
    selectedItems[0] ? "visible" : "hidden"};
  transform: translate(-4px, -17px);
  fill: ${theme.accentColor};
`;

const StyledCartIcon = styled(FaShoppingCart)`
  fill: white;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    fill: ${theme.accentColor};
    transition: 0.3s ease-out;
  }
`;

export default Header;
