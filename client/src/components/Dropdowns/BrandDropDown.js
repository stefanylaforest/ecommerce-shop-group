import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import { theme } from "../GlobalStyles";
import { Link, useLocation } from "react-router-dom";

const BrandDropDown = () => {
  const { brands } = useContext(AppContext);

  let allBrands = Object.values(brands);
  allBrands = allBrands.map((brand) => {
    return brand.name;
  });

  return (
    <Wrapper>
      <Hover>
        <div>
          <Title tabIndex={0} role="button">
            Shop By Brand
          </Title>
        </div>
        <Ulbox>
          {allBrands.slice(0, 6).map((brandName, i) => (
            <li key={`brand-${i}`}>
              <Link to={`/products?brand=${brandName}`}>
                <DropDownListItem type="button">{brandName}</DropDownListItem>
              </Link>
            </li>
          ))}
          <Link to={`/brands`}>
            <DropDownListItem>View All</DropDownListItem>
          </Link>
        </Ulbox>
      </Hover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  position: relative;
`;

const Title = styled.div`
  cursor: pointer;
`;

const Ulbox = styled.ul`
  background-color: white;
  border-radius: 5px;
  position: absolute;
  width: 150px;
  display: none;
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Hover = styled.div`
  &:hover {
    ${Ulbox} {
      display: block;
    }
  }
`;

const DropDownListItem = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  padding: 5px 5px 5px 10px;
  font-size: 14px;
  text-transform: uppercase;
  &:hover {
    color: ${theme.accentColor};
  }
`;

export default BrandDropDown;
