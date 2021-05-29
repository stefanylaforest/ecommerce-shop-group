import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import CategoriesDropDown from "./Dropdowns/CategoriesDropDown";
import BrandDropDown from "./Dropdowns/BrandDropDown";
import WearablesDropDown from "./Dropdowns/WearablesDropDown";

const Header = ({handleClickOnCartIcon}) => {
  const { categories, brands } = useContext(AppContext);

  return (
    <div
      style={{
        background: useLocation().pathname !== "/" && "#454e51",
      }}
    >
      <LogoRow>
        <HomeNavLink exact to="/">
          <Title>
            TECH<span style={{ color: `${theme.accentColor}` }}>ACTIV</span>
          </Title>
        </HomeNavLink>
        {/* <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon> */}
      </LogoRow>
      <NavMenu>
        <CategoriesDropDown />
        <BrandDropDown />
        <WearablesDropDown />
        <StyledNavLink exact to="/products">
          <li>Shop All</li>
        </StyledNavLink>
        <li>
          <StyledCartIcon onClick={handleClickOnCartIcon}/>
        </li>
      </NavMenu>
    </div>
  );
};

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
`;

const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${theme.accentColor};
  }
  &:visited {
    color: white;
  }
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
