import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AppContext } from "./AppContext";
import { FaShoppingCart } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import DropDown from "./CategoriesDropDown";

const Header = () => {
  const { categories, brands } = useContext(AppContext);

  // console.log("brands", brands);

  return (
    <HeaderWrapper>
      <LogoRow>
        <NavLink to="/">
          <Logo>Store Name</Logo>
        </NavLink>
      </LogoRow>
      <NavMenu>
        <DropDown title="Shop By Category" />
        {/* <li>Shop By Category</li> */}
        <li>Shop By Brand</li>
        <li>Wearables</li>
        <li>Shop All</li>
        <li>
          <StyledCartIcon />
        </li>
      </NavMenu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: transparent;
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  color: white;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  color: white;
  text-transform: uppercase;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  font-size: 22px;
  &:hover {
    fill: ${theme.accentColor};
  }
`;

const StyledCartIcon = styled(FaShoppingCart)`
  fill: white;
  cursor: pointer;
  font-size: 22px;
  &:hover {
    fill: ${theme.accentColor};
  }
`;

export default Header;
