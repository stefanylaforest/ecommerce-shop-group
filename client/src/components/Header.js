import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { FaShoppingCart } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import CategoriesDropDown from "./Dropdowns/CategoriesDropDown";
import BrandDropDown from "./Dropdowns/BrandDropDown";

const Header = () => {
  const { categories, brands } = useContext(AppContext);

  // console.log("brands", brands);
  // console.log("categories", categories);

  const allBrands = Object.values(brands);
  const brandName = allBrands.map((brand) => {
    return brand.name;
  });

  // console.log("brand", brandName);

  return (
    <HeaderWrapper>
      <LogoRow>
        <HomeNavLink exact to="/">
          <Logo>Store Name</Logo>
        </HomeNavLink>
      </LogoRow>
      <NavMenu>
        <CategoriesDropDown />
        <BrandDropDown />
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

const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
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
